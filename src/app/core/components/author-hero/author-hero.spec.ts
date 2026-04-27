import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHero } from './author-hero';

describe('AuthorHero', () => {
  let component: AuthorHero;
  let fixture: ComponentFixture<AuthorHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorHero],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthorHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
