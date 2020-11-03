import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MainListComponent } from './main-list/main-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MovieComponent } from './movie/movie.component';
import { TvShowComponent } from './tv-show/tv-show.component';


@NgModule({
  declarations: [MainListComponent, MoviesComponent, MovieListComponent, TvShowsComponent, MovieComponent, TvShowComponent],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    HttpClientModule 

  ]
})
export class MovieListModule { }
