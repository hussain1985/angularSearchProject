import  { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from './app.component';
import {ArtistComponent} from './artist/artist.component';
import {ArtistTrackListComponent} from './artist-track-list/artist-track-list.component';
import {ArtistAlbumListComponent} from './artist-album-list/artist-album-list.component';




 const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: AppComponent},
     {path: 'search/:term', component:AppComponent},
     {
         path:'artist/:artistId', 
         component: ArtistComponent,
         children: [
             {path: '', redirectTo: 'tracks', pathMatch: 'full'},
             {path: 'tracks', component: ArtistTrackListComponent },
             {path: 'albums', component: ArtistAlbumListComponent }
             
         ]
     } 
     
];

export const routing = RouterModule.forRoot(routes, {useHash: true});