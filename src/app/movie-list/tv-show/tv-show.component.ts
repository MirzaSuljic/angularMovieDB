import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDataService } from 'src/app/service/movie-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvDetails: any = {};
  tvId = this.route.snapshot.params['id'];


  constructor(private movieDataService: MovieDataService,
              public route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {

    console.log( this.tvId);

    this.movieDataService.getTVDetails(this.tvId).subscribe((data: any) => {
      this.tvDetails = data;
      console.log( this.tvDetails);
    });
  }

  BtnPrevious() {

    this.router.navigate([''], { queryParams: { selectedTab: '1' } });
    // this.location.back();
    }

}
