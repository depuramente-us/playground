import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    NavbarComponent,
    NotificationComponent,
    SearchComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
