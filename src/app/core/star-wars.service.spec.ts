import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { StarWarsService } from './star-wars.service';

describe('StarWarsService', () => {
    let service: StarWarsService;

    beforeEach(() => {
        TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
        service = TestBed.inject(StarWarsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
