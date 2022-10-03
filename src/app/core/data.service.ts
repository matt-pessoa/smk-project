import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISlides } from '../shared/interfaces';

@Injectable()
export class DataService {
  slideUrl: string = '../../assets/slideImages.json';
  baseArtUrl: string = 'https://api.smk.dk/api/v1/art/';
  searchUrl: string = 'search?keys=';

  config: string = '&offset=0&rows=10';
  lang: string = '&lang=en';

  constructor(private http: HttpClient) {}

  getSlideImages(): Observable<ISlides[]> {
    return this.http.get<ISlides[]>(this.slideUrl);
  }

  getSearchArt(search: string): Observable<{}> {
    return this.http.get(this.baseArtUrl + this.searchUrl + search);
  }
}
