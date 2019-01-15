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
import { WeatherComponent } from './api/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './shared/keys-pipe.pipe';
import { TemperatureConverterPipe } from './shared/temperature-converter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NasaComponent } from './api/nasa/nasa.component';
import { ShowsComponent } from './api/shows/shows.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ShowDetailsComponent } from './api/shows/show-details/show-details.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { MoviesComponent } from './api/movies/movies.component';


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
    RouterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
