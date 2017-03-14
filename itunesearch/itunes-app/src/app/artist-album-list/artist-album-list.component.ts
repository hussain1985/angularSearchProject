import { Component, OnInit } from '@angular/core';
import  { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.css']
})
export class ArtistAlbumListComponent implements OnInit {
    private artistAlbum: any[];
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
  this.route.parent.params.subscribe(params=>{
     this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`) 
     .toPromise()
     .then(res=> {
         this.artistAlbum = res.json().results.slice(1);
     })
  });
  
  }

  ngOnInit() {
  }

}
