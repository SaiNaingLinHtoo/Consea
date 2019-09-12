import { NgModule } from '@angular/core';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@app/shared/component/spinner/spinner.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeLayoutComponent,
    LoginComponent,
    WelcomeComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
  ],

  providers: [],

  imports: [
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class MainModule { }
