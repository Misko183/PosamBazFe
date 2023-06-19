import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}


  private loginUrl = 'https://msbazar-3e8234d30168.herokuapp.com/api/login';
  private registerUrl = 'https://msbazar-3e8234d30168.herokuapp.com/api/userRegister';
  private deleteUserUrl = 'https://msbazar-3e8234d30168.herokuapp.com/api/deleteuser';
  private editUserUrl = 'https://msbazar-3e8234d30168.herokuapp.com/api/edituser';
  private allUsersUrl = 'https://msbazar-3e8234d30168.herokuapp.com/api/users';
  private sendUser = 'https://msbazar-3e8234d30168.herokuapp.com/api/infoAboutUser';
  private emailRegisterUrl = 'https://msbazar-3e8234d30168.herokuapp.com/register';
  private registerMessageUrl = 'https://msbazar-3e8234d30168.herokuapp.com/registrationMessage';

  registerUser(user: User) {
    return this.http.post<User>(this.registerUrl, user);
  }

  public deleteUser(user: User) {
    return this.http.post<User>(this.deleteUserUrl, user);
  }

  public editUser(user: User) {
    return this.http.post<User>(this.editUserUrl, user);
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersUrl);
  }

  public getUsersRole(): Observable<User> {
    return this.http.get<User>(this.sendUser);
  }

  public registerByEmail(user: User) {
    return this.http.post<User>(this.emailRegisterUrl, user);
  }

  public returnMessage() {
    return this.http.get<String>(this.registerMessageUrl);
  }

}
