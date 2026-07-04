import {Component, input} from '@angular/core';
import {BlogTableOfContentsItem} from '../../../models/Blog';

@Component({
  selector: 'app-blog-table-of-contents',
  imports: [],
  templateUrl: './blog-table-of-contents.html',
  styleUrl: './blog-table-of-contents.css',
})
export class BlogTableOfContents {

  readonly items = input.required<BlogTableOfContentsItem[]>();

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    history.replaceState(null, '', `#${sectionId}`);
  }

}
