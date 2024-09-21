import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VerifyComponent } from './pages/auth/verify/verify.component';
import { BoardingComponent } from './pages/auth/boarding/boarding.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PharmacyDetailComponent } from './pages/pharmacy-detail/pharmacy-detail.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyComponent2 } from './pages/survey-2/survey.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: LoginComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'boarding', component: BoardingComponent },
    { path: 'pharmacy-detail', component: PharmacyDetailComponent },
    { path: 'product-detail', component: ProductDetailComponent },
    { path: 'product-survey', component: SurveyComponent },
    { path: 'product-survey-2', component: SurveyComponent2 },
];
