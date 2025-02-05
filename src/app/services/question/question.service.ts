import { inject, Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  http= inject(HttpService);
  constructor() { }

  getAllSurveyQuestions(payload:any){
    return this.http.get('survey-question/getAllSurveyQuestions', payload)
  }
  createSubmission(payload:any){
    return this.http.post('survey-submission/create', payload)
  }

  updateSurveyQuestion(questionSurveyId:any,payload:any){
    return this.http.put(`survey-question/${questionSurveyId}`, payload)
  }

}
