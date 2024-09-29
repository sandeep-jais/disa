import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiSelectQuestionComponent } from './question-multi-select-question.component';

describe('QuestionMultiSelectQuestionComponent', () => {
  let component: QuestionMultiSelectQuestionComponent;
  let fixture: ComponentFixture<QuestionMultiSelectQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMultiSelectQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMultiSelectQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
