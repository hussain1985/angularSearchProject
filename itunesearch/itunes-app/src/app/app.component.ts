import { Component } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import  { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private loading: boolean =false;
  constructor(private itunes: SearchServiceService, private route: ActivatedRoute,private router: Router){
      this.route.params.subscribe(params=>
                                 {
          if(params['term']){
              this.doSearch(params['term'])
          }
          
      });
                                  
                                  
  }
    onSearch(term: string){
        this.router.navigate(['search',term]);
    }
    
    doSearch(term: string){
        this.loading=true;
        this.itunes.search(term)
        .then(()=> this.loading=false);
    }
    
}
