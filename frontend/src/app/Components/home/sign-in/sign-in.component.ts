import { User } from './../../../Models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Social login
import { AuthService } from 'angularx-social-login';

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


  public user: User;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _sharedService: SharedService,
    private _router: Router
  ) { }

  ngOnInit() {
  }


  onLogin(type: number) {
    if (type == 1) {
      // Inicio de sesion con google
      this.googleAuth();
    } else if (type == 2) {
      // Metodo de incio de sesion con facebook
    } else {
      // Metodo de inicio de sesion local
    }
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
    }).catch(err => {
      console.log('Process Canceled', err);
    });
  }

}
