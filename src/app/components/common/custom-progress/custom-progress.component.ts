import { Component, Input } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-custom-progress',
  standalone: true,
  imports: [ProgressBarModule],
  templateUrl: './custom-progress.component.html',
  styleUrl: './custom-progress.component.scss'
})
export class CustomProgressComponent {
  @Input('value') value:number=0;
  @Input('total') total:number=0;
}
