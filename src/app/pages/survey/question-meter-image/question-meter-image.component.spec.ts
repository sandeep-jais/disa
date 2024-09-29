import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMeterImageComponent } from './question-meter-image.component';

describe('QuestionMeterImageComponent', () => {
  let component: QuestionMeterImageComponent;
  let fixture: ComponentFixture<QuestionMeterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMeterImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMeterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
