import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { AuthService } from 'src/auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './shared/keys-pipe.pipe';
import { TemperatureConverterPipe } from './shared/temperature-converter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NasaComponent } from './pages/nasa/nasa.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ShowDetailsComponent } from './pages/shows/show-details/show-details.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PicflowComponent } from './pages/picflow/picflow.component';
import { DeferLoadModule } from '@trademe/ng-defer-load'
import { WeatherService } from './pages/weather/weather.service';
import { ShowsService } from './pages/shows/shows.service';
import { NasaService } from './pages/nasa/nasa.service';
import { PicflowService } from './pages/picflow/picflow.service';
import { MoviesService } from './pages/movies/movies.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviesNewsComponent } from './pages/movies/movies-news/movies-news.component';
import { MoviesOnairComponent } from './pages/movies/movies-onair/movies-onair.component';
import { MoviesTrendingComponent } from './pages/movies/movies-trending/movies-trending.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { WeatherAdapter } from './models/weather';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WeatherComponent,
    KeysPipe,
    TemperatureConverterPipe,
    NasaComponent,
    ShowsComponent,
    LoadingSpinnerComponent,
    ShowDetailsComponent,
    NotFoundComponent,
    MoviesComponent,
    PicflowComponent,
    MoviesNewsComponent,
    MoviesOnairComponent,
    MoviesTrendingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    DeferLoadModule,
    InfiniteScrollModule,
    ScrollingModule
  ],
  providers: [AuthService, WeatherService, ShowsService, NasaService, PicflowService, MoviesService, WeatherAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
