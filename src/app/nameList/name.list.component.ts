import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-name-list',
    templateUrl: './name.list.component.html',
    //styleUrls: ['./planet.component.scss'],
})
export class NameListComponent {
	@Input() id!: string;

    person$: Observable<Person>;
    //residents$: Observable<Person>[] = [];

    constructor(private readonly sw: StarWarsService) {
		console.log(this.id);
        this.person$ = this.sw.getPersonById(1);
        
        /*this.planet$.subscribe(planet => {
            planet.residents.map(resident => {
                return this.residents$.push(this.sw.getPersonById(toId(resident)));
            });
        });*/
    }
}
