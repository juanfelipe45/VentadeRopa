import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Social Login
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';

// Routing
import { SignInRoutingModule } from './../../Routes/sign-in/sign-in-routing.module';

// Services
import { UserService } from './../../Services/user/user.service';
import { SharedService } from './../../Services/shared/shared.service';

// Components
import { SignInComponent } from '../../Components/home/sign-in/sign-in.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1062396271512-f67i10vcu3o0u8f4voe1of2o9nl50cvt.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SocialLoginModule,
    SignInRoutingModule,
  ],
  providers: [
    UserService,
    SharedService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ]
})
export class SignInModule { }
