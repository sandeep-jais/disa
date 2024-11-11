import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMetersSecondComponent } from './question-meters-second.component';

describe('QuestionMetersSecondComponent', () => {
  let component: QuestionMetersSecondComponent;
  let fixture: ComponentFixture<QuestionMetersSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMetersSecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMetersSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
