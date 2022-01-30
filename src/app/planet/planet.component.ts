import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
})
export class PlanetComponent {
    planet$: Observable<Planet>;

    constructor(private readonly sw: StarWarsService, private readonly route: ActivatedRoute) {
        this.planet$ = this.sw.getPlanetById(Number(this.route.snapshot.paramMap.get('id')));
    }
}
