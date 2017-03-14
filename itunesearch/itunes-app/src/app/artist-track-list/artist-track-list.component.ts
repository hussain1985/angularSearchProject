import { Component, OnInit } from '@angular/core';
import  { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';



@Component({
  selector: 'app-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.css']
})
export class ArtistTrackListComponent implements OnInit {
    private songsTracks: any[];
    
    constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params=> {
        this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
        .toPromise()
        .then(res=> {
             console.log(res.json().results);
              this.songsTracks = res.json().results.slice(1);
        }); 
             
    });
  
  }
    ngOnInit() {
  }


}

