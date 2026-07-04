import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BlogPost} from '../../../models/Blog';

@Component({
  selector: 'app-blog-card',
  imports: [
    RouterLink
  ],
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.css',
})
export class BlogCard {

  readonly post = input.required<BlogPost>();

}
