import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  standalone: true,
  imports: [],
  templateUrl: './next-button.component.html',
  styleUrl: './next-button.component.scss'
})
export class NextButtonComponent {
    @Input() disabled:boolean|unknown= false;
}
