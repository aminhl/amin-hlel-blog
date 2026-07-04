import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlePage } from './blog-article-page';

describe('BlogArticlePage', () => {
  let component: BlogArticlePage;
  let fixture: ComponentFixture<BlogArticlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticlePage],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogArticlePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
