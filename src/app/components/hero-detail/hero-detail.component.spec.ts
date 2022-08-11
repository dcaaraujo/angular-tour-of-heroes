import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../../services/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async () => {
    heroServiceSpy = jasmine.createSpyObj('HeroService', [
      'getHero',
      'updateHero',
    ]);
    heroServiceSpy.getHero.and.returnValue(of({ id: 1, name: 'Superman' }));
    heroServiceSpy.updateHero.and.returnValue(of({}));

    await TestBed.configureTestingModule({
      declarations: [HeroDetailComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
