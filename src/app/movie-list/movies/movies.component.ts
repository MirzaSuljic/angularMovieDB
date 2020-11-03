import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieDataService } from 'src/app/service/movie-data.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input() list_movies: any;

  apiResponse: any;
  searchQuery = '';
  timer = null;
  noResult = false;

  // public loading: boolean = false;
  // public results: Observable<any>;
  // public searchField: FormControl;
  constructor(public restApi: MovieDataService,
              private router: Router,){

  }

  ngOnInit(): void {


    
   }


  }
