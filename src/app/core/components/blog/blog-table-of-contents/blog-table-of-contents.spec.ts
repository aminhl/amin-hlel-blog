import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTableOfContents } from './blog-table-of-contents';

describe('BlogTableOfContents', () => {
  let component: BlogTableOfContents;
  let fixture: ComponentFixture<BlogTableOfContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTableOfContents],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogTableOfContents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
