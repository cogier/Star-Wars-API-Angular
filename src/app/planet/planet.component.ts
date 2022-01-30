import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

function getId(url: string): number {
    const parts = url.split('/').filter(s => s.length);
    return parseInt(parts[parts.length - 1], 10);
}

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
    planet$: Observable<Planet>;
    residents$: Observable<Person>[] = [];

    constructor(private readonly sw: StarWarsService, private readonly route: ActivatedRoute) {
        this.planet$ = this.sw.getPlanetById(Number(this.route.snapshot.paramMap.get('id')));
        
        this.planet$.subscribe(planet => {
            planet.residents.forEach(resident => {
                return this.residents$.push(this.sw.getPersonById(getId(resident)));
            });
        });
    }
}
