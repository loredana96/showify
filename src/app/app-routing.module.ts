import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SerieListEpisodesComponent } from './serie-list-episodes/serie-list-episodes.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: DashboardComponent },
  { path: 'Movies', component: MovieListComponent },
  { path: 'Detail/:id', component: MovieDetailComponent },
  { path: 'series/:id', component: SerieDetailComponent },
  { path: 'series/:id/episodes', component: SerieListEpisodesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }