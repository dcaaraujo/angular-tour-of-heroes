import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from '../../services/hero.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(
      of([
        { id: 1, name: 'Superman' },
        { id: 2, name: 'Batman' },
        { id: 3, name: 'Catwoman' },
        { id: 4, name: 'Flash' },
        { id: 5, name: 'Punisher' },
        { id: 6, name: 'Storm' },
      ])
    );

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch heroes on init', () => {
    expect(component.heroes.length).toBeGreaterThan(0);
  });

  it('should only have a maximum of 4 heroes', () => {
    expect(component.heroes).toHaveSize(4);
    expect(component.heroes[0].id).toEqual(2);
    expect(component.heroes[3].id).toEqual(5);
  });
});
