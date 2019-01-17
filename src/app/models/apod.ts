import { Injectable } from '@angular/core';
import { Adapter } from '../core/adapter';

export class Apod {

    constructor(
        public title: string,
        public url: string,
        public explanation: string
    ) {}
    
}

@Injectable({
    providedIn: 'root'
})
export class ApodAdapter implements Adapter<Apod> {
    adapt(item: any): Apod {
        return new Apod(
            item.title,
            item.url,
            item.explanation
        )
    }
}