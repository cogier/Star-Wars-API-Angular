import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-name-list',
    templateUrl: './name.list.component.html',
    //styleUrls: ['./planet.component.scss'],
})
export class NameListComponent {
	@Input() id!: number;
	
	person$: Observable<Person> | undefined;

    constructor(private readonly sw: StarWarsService) {}

	ngOnInit() {
		console.log('ID is: ', this.id);
		this.person$ = this.sw.getPersonById(this.id);
	}
}
