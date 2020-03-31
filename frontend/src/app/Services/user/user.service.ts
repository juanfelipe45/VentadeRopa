import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// Auth Google
import { GoogleLoginProvider, AuthService, FacebookLoginProvider } from 'angularx-social-login';

// Services
import { HttpService } from '../http/http.service';
import { SharedService } from './../shared/shared.service';
import { SocialUsers } from 'src/app/Models/socialUsers';
import { User } from 'src/app/Models/user';

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

  signInWithFacebok(data: SocialUsers): Observable<any> {
    const urlApi: string = 'userIdentities/validateInfo';
    return this._httpService.httpPostNoHeader(urlApi, {socialUser: data});
  }

  loginFacebook(): Promise<SocialUsers> {
    const socialId = FacebookLoginProvider.PROVIDER_ID;
    return this._OAuth.signIn(socialId).then(socialusers => {
      return socialusers
    });
  }


  loginLocal(data: User): Observable<any> {
    const urlApi: string = 'users/login';
    return this._httpService.httpPostNoHeader(urlApi, {email: data.email, password: data.password});
  }

  logoutUser(): Observable<any> {
    const accessToken: string = this._sharedService.getToken();
    this._OAuth.signOut();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('verifyAccess');
    const urlApi: string = 'users/logout?access_token=' + accessToken;
    return this._httpService.httpPostNoHeader(urlApi, null);
  }
}
