import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
    people$: Observable<Paged<Person>>;

    constructor(private readonly sw: StarWarsService) {
        this.people$ = this.sw.listPeople();
    }
}
