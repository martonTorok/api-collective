import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './weather.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {
  currentDate: number;
  currentWeatherData: Weather;
  weatherForm: FormGroup;
  city = 'Budapest';
  fiveDayWeatherData: Weather[];
  isValidCity: boolean = null;
  showSpinner: boolean = true;

  chart = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherForm = new FormGroup({
      citySearch: new FormControl(null, Validators.required)
    })
    this.currentDate = Date.now();
    this.getCurrentWeatherData(this.city);
    this.getFiveDayWeatherData(this.city);

  }

  ngOnDestroy() { }

  getCurrentWeatherData(city: string) {
    return this.weatherService.getCurrentWeatherByCity$(city)
      .subscribe(
        data => {
          this.currentWeatherData = data;
          this.isValidCity = true;
          this.showSpinner = false;
        },
        err => {
          console.error(err);
          this.isValidCity = false;
        }
      );
  }

  getFiveDayWeatherData(city: string) {
    this.weatherService.getFiveDayWeatherBycity(city)
      .subscribe(
        data => {
          this.fiveDayWeatherData = data;
          let temp_max = data.map(res => res.temp_max);
          let temp_min = data.map(res => res.temp_min);
          let alldates = data.map(res => res.dt)

          let weatherDates = []
          alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { month: 'short', day: 'numeric', hour: '2-digit' }))
          })

          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: temp_max,
                  borderColor: "#3cba9f",
                  fill: false
                },
                {
                  data: temp_min,
                  borderColor: "#ffcc00",
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
          this.showSpinner = false;
        },
        err => {
          console.error(err);
        }
      );
  }

  onSubmit() {
    const cityInput = this.weatherForm.get('citySearch').value;
    if (this.weatherForm.invalid) {
      this.isValidCity = false;
    }
    this.getCurrentWeatherData(cityInput);
    this.getFiveDayWeatherData(cityInput);
  }



}
