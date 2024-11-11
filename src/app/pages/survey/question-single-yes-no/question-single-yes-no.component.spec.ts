import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSingleYesNoComponent } from './question-single-yes-no.component';

describe('QuestionSingleYesNoComponent', () => {
  let component: QuestionSingleYesNoComponent;
  let fixture: ComponentFixture<QuestionSingleYesNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionSingleYesNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionSingleYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
