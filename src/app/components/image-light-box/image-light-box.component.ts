import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-image-light-box',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './image-light-box.component.html',
  styleUrl: './image-light-box.component.scss'
})
export class ImageLightBoxComponent {
  @Input('visible') visible: boolean = false;
  @Input('imageUrl') imageUrl: string= 'assets/images/camera.svg';

  @Output('close') close= new EventEmitter<any>();

  hide(){
    this.close.emit();
  }
}
