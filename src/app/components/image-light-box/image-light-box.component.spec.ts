import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLightBoxComponent } from './image-light-box.component';

describe('ImageLightBoxComponent', () => {
  let component: ImageLightBoxComponent;
  let fixture: ComponentFixture<ImageLightBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLightBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
