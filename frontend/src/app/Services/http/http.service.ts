import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Services
import { SharedService } from '../shared/shared.service';

// Environment
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string;
  private headers: HttpHeaders;

  constructor( private _http: HttpClient, private _sharedService: SharedService ) {
    this.url = environment.baseUrlDev;
  }

  private getHeaders(): HttpHeaders {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this._sharedService.getToken()
    });
    return this.headers;
  }

  httpGet(url: string) {
    return this._http.get(this.url + url, {headers: this.getHeaders()}).pipe(map((res: any) => res));
  }

  httpPost(url: string, data: any) {
    return this._http.post(this.url + url, data, {headers: this.getHeaders()}).pipe(map((res: any) => res));
  }

  httpPut(url: string, data: any) {
    return this._http.put(this.url + url, data, {headers: this.getHeaders()}).pipe(map((res: any) => res));
  }

  httpPatch(url: string, data: any) {
    return this._http.patch(this.url + url, data, {headers: this.getHeaders()}).pipe(map((res: any) => res));
  }


  // Solicitud sin Autenticación

  httpGetNoHeader(url: string) {
    return this._http.get(this.url + url).pipe(map((res: any) => res));
  }

  httpPostNoHeader(url: string, data: any) {
    return this._http.post(this.url + url, data).pipe(map((res: any) => res));
  }

  httpPatchNoHeader(url: string, data: any) {
    return this._http.patch(this.url + url, data).pipe(map((res: any) => res));
  }

  httpDeleteNoHeader(url: string) {
    return this._http.delete(this.url + url).pipe(map((res: any) => res));
  }
}
