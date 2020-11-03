import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainListComponent } from './main-list/main-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowComponent } from './tv-show/tv-show.component';

const routes: Routes = [
  {
    path: '',
    component: MainListComponent,
    children: [
      {
        path: '',
        component: MovieListComponent,
       
      },
      {
        path: 'movies',
        component: MoviesComponent,
       
      },
      {
        path: 'movie/:id',
        component: MovieComponent,
       
      },
      {
        path: 'tv-show/:id',
        component: TvShowComponent,
       
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListRoutingModule { }
