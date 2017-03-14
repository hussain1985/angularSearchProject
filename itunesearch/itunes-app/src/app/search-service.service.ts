import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { SearchItem } from './searchItem';
import 'rxjs/add/operator/toPromise'



@Injectable()
export class SearchServiceService {
apiRoot: string = 'https://itunes.apple.com/search';
  serviceResults: SearchItem[];
  loading: boolean;

  constructor(private jsonp:Jsonp) {
    this.serviceResults = [];
    this.loading = false;
  }

    search(term: string){
    let promise = new Promise((resolve, reject) =>{
      let apiUrl = `${this.apiRoot}?term=${term}&music=movie&limit=20&callback=JSONP_CALLBACK`;
       this.jsonp.request(apiUrl)
       .toPromise()
       .then(res=> {
           //console.log(res.json().results);
           this.serviceResults=res.json().results.map(
           item=>{
             return new SearchItem(
                   item.trackName,
                   item.artistName,
                   item.trackViewUrl,
                   item.artworkUrl30,
                   item.artistId
               );
            
               
           })
           
           resolve();
          
       }, msg=>{
           reject();
       });
    });
    return promise;
}
    
}
