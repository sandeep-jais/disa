import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import {StyleClassModule} from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule,StyleClassModule,InputTextModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
