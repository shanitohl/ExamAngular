import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.urlBase + "posts/";
  }

  getAllByPost(postId: number): Observable<Comment[]> {
    
    return this.httpClient.get<Comment[]>(this.baseUrl + `${postId}/comments`);
  }
}
