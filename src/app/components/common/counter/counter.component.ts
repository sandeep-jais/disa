import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input({required:true}) value: any = 0;
  @Output() change:any= new EventEmitter<any>();
  
  ngOnInit():void{
    console.log(this.value)
  }
  increment() {
    this.value++;
    this.change.emit(this.value);
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.change.emit(this.value);
    }
  }
}
