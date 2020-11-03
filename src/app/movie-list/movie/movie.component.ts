import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDataService } from 'src/app/service/movie-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieDetails: any = {};
  movieId = this.route.snapshot.params['id'];
  safeUrl: any;


  constructor(private movieDataService: MovieDataService,
              public route: ActivatedRoute,
              private sanitizer: DomSanitizer,
              private location: Location,
              private router: Router ) {
               }

  ngOnInit(): void {

    this.movieDataService.getMovieDetails(this.movieId).subscribe((data: {}) => {
      this.movieDetails = data;
    });
  }

  BtnPrevious() {
    this.router.navigate([''], { queryParams: { selectedTab: '0' } });
    // this.location.back();
    }

}
