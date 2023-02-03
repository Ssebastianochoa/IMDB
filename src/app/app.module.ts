import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsMenuComponent } from './header/bs-menu/bs-menu.component';
import { HeaderComponent } from './header/header.component';
import { AcordionMenuComponent } from './header/menu-sidebar/acordion-menu/acordion-menu.component';
import { MenuSidebarComponent } from './header/menu-sidebar/menu-sidebar.component';
import { LinksComponent } from './header/menu/links/links.component';
import { MenuComponent } from './header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LinksComponent,
    BsMenuComponent,
    MenuSidebarComponent,
    AcordionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
