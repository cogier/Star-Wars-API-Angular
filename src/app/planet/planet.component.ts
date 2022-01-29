import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
    people$: Observable<Paged<Person>>;

    constructor(private readonly sw: StarWarsService) {
        this.people$ = this.sw.listPeople();
    }
}
