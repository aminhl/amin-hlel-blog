import {Component, input} from '@angular/core';
import {BlogContentBlock} from '../../../models/Blog';

@Component({
  selector: 'app-blog-content-renderer',
  imports: [],
  templateUrl: './blog-content-renderer.html',
  styleUrl: './blog-content-renderer.css',
})
export class BlogContentRenderer {

  readonly content = input.required<BlogContentBlock[]>();


}
