import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { SharedService } from './../../../Services/shared/shared.service';
import { UserService } from './../../../Services/user/user.service';
import { take } from 'rxjs/operators';

//

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.sass']
})
export class RopaComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _sharedService: SharedService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  logoutUser(): void {
    this._userService.logoutUser().pipe(take(1))
    .subscribe(
      data => {
        this._router.navigate(['/']);
      },
      err => console.log(err)
    );
  }

}
