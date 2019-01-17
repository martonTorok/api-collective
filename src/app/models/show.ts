import { Adapter } from '../core/adapter';
import { Injectable } from '@angular/core';

export class Show{

    constructor(
        public id: number,
        public name: string,
        public homepage: string,
        public last_air_date: string,
        public genres: Object[],
        public number_of_episodes: number,
        public number_of_seasons: number,
        public overview: string,
        public vote_average: number,
        public episode_run_time: number
    ) { }

}

@Injectable({
    providedIn: 'root'
})
export class ShowAdapter implements Adapter<Show> {
    adapt(item: any): Show {
        return new Show(
            item.id,
            item.name,
            item.homepage,
            item.last_air_date,
            item.genres,
            item.number_of_episodes,
            item.number_of_seasons,
            item.overview,
            item.vote_average,
            item.episode_run_time
        )
    }
}