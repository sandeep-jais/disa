import { Component, inject } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boarding',
  standalone: true,
  imports: [StyleClassModule,CardModule, ButtonModule, FormsModule],
  templateUrl: './boarding.component.html',
  styleUrl: './boarding.component.scss'
})

export class BoardingComponent {
  otp : any;
  step:number=1;
  router= inject(Router);

  changeStep(){
    if(this.step==3){
      this.step=1;
      this.router.navigate(['/home']);
    }else{
      this.step+=1;
    }
  }
  skip(){
    this.step=1;
    this.router.navigate(['/home']);
  }
}
