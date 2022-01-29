import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StarWarsService {
    constructor(private readonly http: HttpClient) {}

    listPeople(): Observable<Paged<Person>> {
        return this.http.get<Paged<Person>>('https://swapi.dev/api/people');
    }

    getPlanetById(id: number): Observable<Planet> {
        return this.http.get<Planet>('https://swapi.dev/api/planets/'+id);
    }
}
