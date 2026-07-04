import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentRenderer } from './blog-content-renderer';

describe('BlogContentRenderer', () => {
  let component: BlogContentRenderer;
  let fixture: ComponentFixture<BlogContentRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogContentRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogContentRenderer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
