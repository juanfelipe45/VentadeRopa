import { User } from './../../../Models/user';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { UserService } from './../../../Services/user/user.service';
import { SharedService } from './../../../Services/shared/shared.service';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {

  public title: string;
  public user: User;
  public message: string;

  constructor(
    private _router: Router,
    private _elementRef: ElementRef,
    private _userService: UserService,
    private _sharedService: SharedService,
  ) {
    this.title = 'Iniciar Sesión';
    this.message = '';
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }


  onLogin(type: number) {
    if (type == 1) {
      // Inicio de sesion con google
      this.googleAuth();
    } else if (type == 2) {
      //inicio de sesion con Facebook
      this.facebookAuth();
    } else {
      this.localAuth();
    }
  }

  closeMessage(): void {
    this.message = '';
  }

  private googleAuth(): void {
    this._userService.loginGoogle().then(userData => {
      this._userService.signInWithGoogle(userData).pipe(take(1))
      .subscribe(
        (data: any) => {
          this._sharedService.setToken(data.info.id);
          this._sharedService.setUser(data.info.userId);
          this._router.navigate(['home/ropa']);
        },
        err => console.log(err)
      );
      console.log(userData);
    }).catch(err => {
      console.log('Process Canceled', err);
    });
  }

  private facebookAuth(): void {
    this._userService.loginFacebook().then(userData => {
      this._userService.signInWithFacebok(userData).pipe(take(1))
      .subscribe(
        (data: any) => {
          this._sharedService.setToken(data.info.id);
          this._sharedService.setUser(data.info.userId);
          this._router.navigate(['home/ropa']);
        },
        err => console.log(err)
      );
      console.log(userData);
    }).catch(err => {
      console.log('Process Canceled', err);
    });
  }

  private localAuth() {
    this._userService.loginLocal(this.user).pipe(take(1))
      .subscribe(
        (data: any) => {
          this._sharedService.setToken(data.id);
          this._sharedService.setUser(data.userId);
          this._router.navigate(['home/ropa']);
        },
        err => {
          console.log('Información Invalidad');
          this.message = 'Usuario o contraseña incorrecta';
          this.user.password = '';
          const inputPass = this._elementRef.nativeElement.querySelector('#email');
          inputPass.focus();
        }
      );
  }

}
