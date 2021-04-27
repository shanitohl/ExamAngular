import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.urlBase + "user/";
  }

  getAllByUser(userId: number): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.baseUrl + `${userId}/albums`);
  }

}
