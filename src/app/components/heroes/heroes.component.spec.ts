import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../../services/hero.service';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    heroServiceSpy = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);
    heroServiceSpy.getHeroes.and.returnValue(
      of([
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
      ])
    );
    await TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
