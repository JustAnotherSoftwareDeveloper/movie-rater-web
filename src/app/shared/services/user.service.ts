import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  addUser(user: User) : Observable<User> {
    return this.http.post('/user',user).pipe(
      map((json: any) => {
        user.userId = json.identifiers[0].userId;
        return user;
      }
    )
    );
  }

  editUser(user: User) : Observable<User> {
    return this.http.put('/user',user) as Observable<User>;
  };

  getUsers() : Observable<User[]> {
    return this.http.get('/users') as Observable<User[]>
  }


}
