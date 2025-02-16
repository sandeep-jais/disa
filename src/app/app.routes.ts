import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VerifyComponent } from './pages/auth/verify/verify.component';
import { BoardingComponent } from './pages/auth/boarding/boarding.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PharmacyDetailComponent } from './pages/pharmacy-detail/pharmacy-detail.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { SurveyComponent2 } from './pages/survey-2/survey.component';
import { SurveyInfoComponent } from './pages/survey-info/survey-info.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from '@guards/login.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent,canActivate: [LoginGuard] },
    { path: 'verify', component: VerifyComponent,canActivate: [LoginGuard] },
    // { path: 'boarding', component: BoardingComponent },
    // { path: 'pharmacy-detail', component: PharmacyDetailComponent },
    { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
    { path: 'product', component: ProductDetailComponent,canActivate: [AuthGuard] },
    { path: 'product-survey-info', component: SurveyInfoComponent ,canActivate: [AuthGuard]},
    { path: 'product-survey', component: SurveyComponent,canActivate: [AuthGuard] },
];
