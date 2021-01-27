import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from 'src/services/movie.service';
import { AuthenticationService } from 'src/services/authentication.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MovieService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
