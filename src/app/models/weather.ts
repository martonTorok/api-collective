import { Adapter } from '../core/adapter';
import { Injectable } from '@angular/core';

export class Weather {

    constructor(
        public name: string,
        public country: string,
        public temp: number,
        public temp_min: number,
        public temp_max: number,
        public dt: number,
        public dt_text: number,
        public humidty: number,
        public clouds: number
    ) { }

}

@Injectable({
    providedIn: 'root'
})
export class WeatherAdapter implements Adapter<Weather> {
    adapt(item: any): Weather {
        return new Weather(
            item.name,
            item.sys.country,
            item.main.temp,
            item.main.temp_min,
            item.main.temp_max,
            item.dt,
            item.dt_txt,
            item.main.humidity,
            item.clouds.all
        )
    }
}