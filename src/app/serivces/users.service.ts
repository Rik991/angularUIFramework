import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  userUrl: string = 'http://localhost:3000/users';

  getAllUser() {
    return this.http.get(this.userUrl);
  }
}
