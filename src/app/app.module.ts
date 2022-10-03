import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtListModule } from './art-list/art-list.module';
import { FavoritesModule } from './favorites/favorites.module';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { ArtInfoModule } from './art-info/art-info.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    ArtListModule,
    FavoritesModule,
    ArtInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
