import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyHttpService } from 'src/app/shared/services/my-http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: MyHttpService) { }

  // En una api normal deberia regresar un Observable del tipo User[]
  getUsers(): Observable<any> {
    return this.http.get(environment.usersAPI);
  }

}
