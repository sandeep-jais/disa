import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  router= inject(Router);

  navigate(path:string){
    this.router.navigate([path])
  }
}
