import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  constructor(private http: HttpClient) {}

  get(url: string, paramsRequest?: any): Observable<any> {
    const headersRequest = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url, {
      headers: headersRequest,
      params: paramsRequest
    });
  }
}
