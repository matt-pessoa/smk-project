import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IArtList, ISlides } from '../shared/interfaces';

@Injectable()
export class DataService {
  slideUrl: string = '../../assets/slideImages.json';
  baseArtUrl: string = 'https://api.smk.dk/api/v1/art/';
  searchUrl: string = 'search?keys=';

  config: string = '&offset=0&rows=100';
  lang: string = '&lang=en';

  constructor(private http: HttpClient) {}

  getSlideImages(): Observable<ISlides[]> {
    return this.http.get<ISlides[]>(this.slideUrl);
  }

  getArt(): Observable<any> {
    return this.http.get(
      this.baseArtUrl +
        this.searchUrl +
        '*' +
        '&randomHighlights=gama' +
        this.config
    );
  }

  getSearchArt(search: string): Observable<any> {
    if (search === '') {
      return this.getArt();
    }
    return this.http.get(
      this.baseArtUrl + this.searchUrl + search + this.config
    );
  }
}
