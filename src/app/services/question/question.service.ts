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
}
