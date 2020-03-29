import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Auth Google
import { GoogleLoginProvider, AuthService } from 'angularx-social-login';

// Services
import { HttpService } from '../http/http.service';
import { SharedService } from './../shared/shared.service';
import { SocialUsers } from 'src/app/Models/socialUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _OAuth: AuthService,
    private _httpService: HttpService,
    private _sharedService: SharedService
  ) { }

  signInWithGoogle(data: SocialUsers): Observable<any> {
    const urlApi: string = 'userIdentities/validateInfo';
    return this._httpService.httpPostNoHeader(urlApi, {socialUser: data});
  }

  loginGoogle(): Promise<SocialUsers> {
    const socialId = GoogleLoginProvider.PROVIDER_ID;
    return this._OAuth.signIn(socialId).then(socialusers => {
      return socialusers;
    });
  }

  signOut(): void {
    this._OAuth.signOut();
    localStorage.clear();
    sessionStorage.clear();
  }
}
