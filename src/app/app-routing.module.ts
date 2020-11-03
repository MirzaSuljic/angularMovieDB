import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('src/app/movie-list/movie-list.module').then(m => m.MovieListModule)
  },
  // {
  //   path: '',
  //   loadChildren: () => import('src/app/tv-shows/tv-shows.module').then(m => m.TvShowsModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
