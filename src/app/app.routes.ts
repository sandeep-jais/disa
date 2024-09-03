import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { VerifyComponent } from './auth/verify/verify.component';
import { BoardingComponent } from './auth/boarding/boarding.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'boarding', component: BoardingComponent },
    { path: 'product-detail', component: ProductDetailComponent },
];
