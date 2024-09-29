import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMeterComponent } from './question-meter.component';

describe('QuestionMeterComponent', () => {
  let component: QuestionMeterComponent;
  let fixture: ComponentFixture<QuestionMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
