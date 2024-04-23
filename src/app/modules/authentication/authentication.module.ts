import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './pages/new-password/new-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { TwoStepsComponent } from './pages/two-steps/two-steps.component';
import {ButtonComponent} from "../../shared/components/button/button.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AuthenticationComponent,
    ForgotPasswordComponent,
    NewPasswordComponent,
    SignInComponent,
    SignUpComponent,
    TwoStepsComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule
  ],

  exports: [
    ButtonComponent
  ]
})
export class AuthenticationModule { }
