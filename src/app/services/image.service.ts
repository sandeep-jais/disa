import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }
  isImageBlurred(image: HTMLImageElement, threshold: number = 100): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!image.complete || image.width === 0 || image.height === 0) {
        reject('Image not loaded or has invalid dimensions');
        return;
      }
  
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      if (!ctx) {
        reject('Canvas context not available');
        return;
      }
  
      // Set canvas size
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw the image
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  
      // Get the grayscale image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const grayImage = new Float32Array(imageData.width * imageData.height);
  
      for (let i = 0; i < pixels.length; i += 4) {
        // Grayscale intensity
        const gray = 0.299 * pixels[i] + 0.587 * pixels[i + 1] + 0.114 * pixels[i + 2];
        grayImage[i / 4] = gray;
      }
  
      // Apply a simple Laplacian kernel to calculate variance
      const kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
      const kernelSize = 3;
      const laplacian = new Float32Array(grayImage.length);
  
      const width = imageData.width;
      const height = imageData.height;
  
      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          let value = 0;
  
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const pixelValue = grayImage[(y + ky) * width + (x + kx)];
              value += pixelValue * kernel[(ky + 1) * kernelSize + (kx + 1)];
            }
          }
  
          laplacian[y * width + x] = value;
        }
      }
  
      // Calculate variance of the Laplacian
      const mean = laplacian.reduce((acc, val) => acc + val, 0) / laplacian.length;
      const variance = laplacian.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / laplacian.length;
  
      // Compare variance with the threshold
      resolve(variance < threshold);
    });
  }
  
  
}
