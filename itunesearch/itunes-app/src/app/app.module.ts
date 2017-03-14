import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { SearchServiceService } from './search-service.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { routing } from './router';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
//import { SearchItemComponent } from 'search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    ArtistAlbumListComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    routing
  ],
  providers: [SearchServiceService],
  bootstrap: [MainComponent]
})
export class AppModule { }
