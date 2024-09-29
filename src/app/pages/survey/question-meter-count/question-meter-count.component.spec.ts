import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMeterCountComponent } from './question-meter-count.component';

describe('QuestionMeterCountComponent', () => {
  let component: QuestionMeterCountComponent;
  let fixture: ComponentFixture<QuestionMeterCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMeterCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMeterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
