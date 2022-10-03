import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtListModule } from './art-list/art-list.module';
import { FavoritesModule } from './favorites/favorites.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ArtListModule,
    FavoritesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
