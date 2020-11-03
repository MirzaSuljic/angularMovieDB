import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  @Input() list_tvShows: any;

  constructor() { }

  ngOnInit(): void {
  }

}
