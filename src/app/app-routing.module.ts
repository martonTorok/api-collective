import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { ShowDetailsComponent } from './pages/shows/show-details/show-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PicflowComponent } from './pages/picflow/picflow.component';
import { MoviesNewsComponent } from './pages/movies/movies-news/movies-news.component';
import { MoviesOnairComponent } from './pages/movies/movies-onair/movies-onair.component';
import { MoviesTrendingComponent } from './pages/movies/movies-trending/movies-trending.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'shows', component: ShowsComponent, children: [
    {path: ':id', component: ShowDetailsComponent}
  ]},
  {path: 'movies', component: MoviesComponent, children: [
    {path: 'news', component: MoviesNewsComponent},
    {path: 'onair', component: MoviesOnairComponent},
    {path: 'trending', component: MoviesTrendingComponent}
  ]},
  {path: 'picflow', component: PicflowComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
