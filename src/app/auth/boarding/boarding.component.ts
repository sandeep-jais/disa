import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-boarding',
  standalone: true,
  imports: [StyleClassModule,CardModule, ButtonModule, FormsModule],
  templateUrl: './boarding.component.html',
  styleUrl: './boarding.component.scss'
})

export class BoardingComponent {
  otp : any
}
