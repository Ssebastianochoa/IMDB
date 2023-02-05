import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './header/menu/menu.component';
import { LinksComponent } from './header/menu/links/links.component';
import { BsMenuComponent } from './header/bs-menu/bs-menu.component';
import { MenuSidebarComponent } from './header/menu-sidebar/menu-sidebar.component';
import { AcordionMenuComponent } from './header/menu-sidebar/acordion-menu/acordion-menu.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import {fas} from '@fortawesome/free-solid-svg-icons';
import { CorruselComponent } from './corrusel/corrusel.component';
import { CardsComponent } from './corrusel/cards/cards.component';
import { PuntajeComponent } from './corrusel/puntaje/puntaje.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LinksComponent,
    BsMenuComponent,
    MenuSidebarComponent,
    AcordionMenuComponent,
    MoviesComponent,
    CorruselComponent,
    CardsComponent,
    PuntajeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
  }

}
