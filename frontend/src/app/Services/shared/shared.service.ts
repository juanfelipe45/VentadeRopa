import { Injectable, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Subject, Observable } from 'rxjs';

// Models

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public static eventExample: EventEmitter<any> = new EventEmitter<any>();
  public static eventUploadPhoto: EventEmitter<boolean> = new EventEmitter<boolean>();

  /***************************************** Constructor ***********************************/

  constructor( ) { }

  /************************************* Funciones de EventEmitter ************************************************/
  emitterMesage(data: any): void {
    SharedService.eventExample.emit(data);
  }

  emitterUploadPhoto(dato: boolean): void {
    SharedService.eventUploadPhoto.emit(dato);
  }


  // emitterTeam(team: Team): any {
  //   console.log(team);
  //   this.sendTeam.next(team);
  // }

  /************************************ Funciones Personales *******************************/

  getUser(): string {
    const userId: string = localStorage.getItem('currentUser');
    return userId;
  }

  getToken(): string {
    const token: string = localStorage.getItem('verifyAccess');
    return token;
  }

  setUser(id: string): void {
    localStorage.setItem('currentUser', id);
  }

  setToken(token: string): void {
    localStorage.setItem('verifyAccess', token);
  }

  getCurrentUser(): any {
    const userString: string = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      return true;
    } else {
      return false;
    }
  }

}
