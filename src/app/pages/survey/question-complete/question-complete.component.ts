import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-complete',
  standalone: true,
  imports: [],
  templateUrl: './question-complete.component.html',
  styleUrl: './question-complete.component.scss'
})
export class QuestionCompleteComponent {
  router = inject(Router);
  navigate(path: string) {
    this.router.navigate([path]);
  }
}
