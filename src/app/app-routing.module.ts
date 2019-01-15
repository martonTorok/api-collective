import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './api/weather/weather.component';
import { ShowsComponent } from './api/shows/shows.component';
import { ShowDetailsComponent } from './api/shows/show-details/show-details.component';
import { MoviesComponent } from './api/movies/movies.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'shows', component: ShowsComponent, children: [
    {path: ':id', component: ShowDetailsComponent}
  ]},
  {path: 'movies', component: MoviesComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
