import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { AppRoutingModule } from './Routes/app-routing.module';

// Module
import { HomeModule } from './Modules/home/home.module';

// Component
import { AppComponent } from './app.component';

// Social Login
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { provideConfig } from './Modules/sign-in/sign-in.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
