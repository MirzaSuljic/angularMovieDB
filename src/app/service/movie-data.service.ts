import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, take } from 'rxjs/operators';
import { Config } from '../config/config';
import { Details } from '../models/details';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  apiUrlMovie:string = Config.apiUrlMovie;
  apiUrlTv:string = Config.apiUrlTv;

  constructor(private http: HttpClient) { }

  
  getAllMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiUrlMovie}top_rated?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
      );
  }

    
  getAllTvShows(): Observable<Movies> {
    return this.http.get<Movies>(`${this.apiUrlTv}top_rated?api_key=${Config.apiKey}`)
      .pipe(
        retry(1)
      );
  }

  getMovieDetails(id: number): Observable<Details> {
    return this.http.get<Details>(`${this.apiUrlMovie}${id}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1)
      );
  }
  getTVDetails(id: number): Observable<Details> {
    return this.http.get<Details>(`${this.apiUrlTv}${id}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1)
      );
  }

  searchDb(content:string, query: string): Observable<Movies> {
    return this.http.get<Movies>(`${Config.search}/${content}?api_key=${Config.apiKey}&query=${query}`) 
      .pipe(
        retry(1)
      );
  }

}
