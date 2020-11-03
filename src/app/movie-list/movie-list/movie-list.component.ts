import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, filter, switchMap } from 'rxjs/operators';
import { MovieDataService } from 'src/app/service/movie-data.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, AfterViewInit {

  
  public currentTab = 0;
  public selectedTab = 1;
  list_movies: any = [];
  list_tvShows;

  apiResponse: any;

  @ViewChild('siteSearch', {static: true}) inputElRef: ElementRef;

  constructor( private route: ActivatedRoute,
              public restApi: MovieDataService) { }

  ngAfterViewInit(): void {
    fromEvent(this.inputElRef.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      filter(() => {
        if(this.inputElRef.nativeElement.value.length >= 3) {
          return true;
        }

        if(this.selectedTab == 0) {
          this.list_movies = this.apiResponse.results.sort(this.compare).slice(0, 10);
        }
        else {
          this.list_tvShows = this.apiResponse.results.sort(this.compare).slice(0, 10);
        }
        return false;
      }),
      switchMap((event: Event) => {
        if(this.selectedTab == 0) {
          return this.restApi.searchDb('movie', this.inputElRef.nativeElement.value);
        }
        else {
          return this.restApi.searchDb('tv', this.inputElRef.nativeElement.value);
        }
      })
    ).subscribe((data:any) => {
      if(this.selectedTab == 0) {
        this.list_movies = data.results.sort(this.compare).slice(0, 10);
      }
      else {
        this.list_tvShows = data.results.sort(this.compare).slice(0, 10);
      }
    });
  }

  ngOnInit(): void {
    this.restApi.getAllTvShows().subscribe((data:any) => {
      this.apiResponse = data;
      this.list_tvShows = data.results.sort(this.compare).slice(0, 10);
    });

    this.route.queryParams.subscribe(
      params => {
        if(params.hasOwnProperty('selectedTab')) 
        {
          this.selectedTab = params['selectedTab'];
        }
      }
    )
    
    
  }

  compare( a, b ) {
    if ( a.vote_average > b.vote_average ){
      return -1;
    }
    if ( a.vote_average < b.vote_average ){
      return 1;
    }
    return 0;
  }
  
  // objs.sort( compare );
  
  changeSelectedTab(index) {
    this.selectedTab = index;

    if(index == 1) {
      if(this.inputElRef.nativeElement.value.length < 3) {
        this.restApi.getAllTvShows().subscribe((data:any) => {
          this.apiResponse = data;
          this.list_tvShows = data.results.sort(this.compare).slice(0, 10);
        });
      }
      else {
        this.restApi.searchDb('tv', this.inputElRef.nativeElement.value).subscribe((data:any) => {
          this.list_tvShows = data.results.sort(this.compare).slice(0, 10);
        });
      }
    }
    else {
      if(this.inputElRef.nativeElement.value.length < 3) {
        this.restApi.getAllMovies().subscribe((data:any) => {
          this.apiResponse = data;
          this.list_movies = data.results.sort(this.compare).slice(0, 10);
        });
      }
      else {
        this.restApi.searchDb('movie', this.inputElRef.nativeElement.value).subscribe((data:any) => {
          this.list_movies = data.results.sort(this.compare).slice(0, 10);
        });
      }
    }
  }


  
  }
  
