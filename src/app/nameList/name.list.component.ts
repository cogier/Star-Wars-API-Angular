import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { getIdFromUrl } from '../core/pipes/to-id.pipe';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-name-list',
    templateUrl: './name.list.component.html',
    //styleUrls: ['./planet.component.scss'],
})
export class NameListComponent {
	@Input() urls!: string[];
	@Input() source!: "person" | "film";

	items: Observable<any>[] = [];

    constructor(private readonly sw: StarWarsService) {}

	ngOnInit() {
		const ids = this.urls.map(url => {
			return getIdFromUrl(url);
		});
		switch (this.source) {
			case "person":
				ids.forEach(id => {
					this.items.push(this.sw.getPersonById(id));
				});
				break;
			case "film":
				ids.forEach(id => {
					this.items.push(this.sw.getFilmById(id));
				});
				break;
		}
	}
}
