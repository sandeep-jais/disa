import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMultiSelectImageComponent } from './question-multi-select-image.component';

describe('QuestionMultiSelectImageComponent', () => {
  let component: QuestionMultiSelectImageComponent;
  let fixture: ComponentFixture<QuestionMultiSelectImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionMultiSelectImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionMultiSelectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
