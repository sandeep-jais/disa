import { Component, inject } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CheckboxModule, StyleClassModule, InputTextModule, ButtonModule, FormsModule,ReactiveFormsModule, InputSwitchModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  checked: boolean = false;
  router= inject(Router);
  userService= inject(UserService);
  form!:FormGroup;
  error:string = "";
  ngOnInit():void{
    this.form = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl(''),
      rememberMe: new FormControl(false)
    });
  }

  submit(){
    if(this.form.valid){
      if(this.form.value.rememberMe){
        localStorage.setItem('username', this.form.value.username);
      }
      if(this.checked){
        this.router.navigate(['/verify'])
      }else{
        console.log(this.form.value);
        this.error=""
        this.userService.login({username: this.form.value.username, password: this.form.value.password}).subscribe({
          next: (result:any) =>{
            localStorage.setItem('user', JSON.stringify(result?.data));
            localStorage.setItem('token', result?.token)
            this.router.navigate(['/product'])
          },
          error: (error) => {
            console.error(error);
            this.error='Invalid credentials';
          }
        })
      }
    }
  }
}
