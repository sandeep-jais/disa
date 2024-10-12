import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProgressComponent } from './custom-progress.component';

describe('CustomProgressComponent', () => {
  let component: CustomProgressComponent;
  let fixture: ComponentFixture<CustomProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
