import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.urlBase + "users";
  }


  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

}
