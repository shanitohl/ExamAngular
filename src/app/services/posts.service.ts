import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.urlBase + "user/";
  }

  getAllByUser(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl + `${userId}/posts`);
  }
}
