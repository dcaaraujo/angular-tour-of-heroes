import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from '../../services/hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let heroServiceSpy: jasmine.SpyObj<HeroService>;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    heroServiceSpy = jasmine.createSpyObj('HeroService', ['searchHeroes']);
    await TestBed.configureTestingModule({
      declarations: [HeroSearchComponent],
      providers: [{ provide: HeroService, useValue: heroServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
