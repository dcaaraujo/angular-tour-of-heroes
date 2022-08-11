import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('HeroService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let snackbarSpy: jasmine.SpyObj<MatSnackBar>;
  let service: HeroService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    snackbarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
    TestBed.configureTestingModule({
      providers: [
        HeroService,
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: MatSnackBar, useValue: snackbarSpy },
      ],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
