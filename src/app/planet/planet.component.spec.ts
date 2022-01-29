import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StarWarsService } from '../core/star-wars.service';
import { PlanetComponent } from './planet.component';

/*describe('PeopleComponent', () => {
    let component: PeopleComponent;
    let fixture: ComponentFixture<PeopleComponent>;
    let starwars: StarWarsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PeopleComponent],
            providers: [{ provide: StarWarsService, useValue: jasmine.createSpyObj({ listPeople: of({ count: 0, results: [] }) }) }],
        }).compileComponents();
    });

    beforeEach(() => {
        starwars = TestBed.inject(StarWarsService);

        fixture = TestBed.createComponent(PeopleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(starwars.listPeople).toHaveBeenCalledTimes(1);
    });
});*/
