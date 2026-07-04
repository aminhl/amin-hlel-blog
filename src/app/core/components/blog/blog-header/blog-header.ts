import {Component, input} from '@angular/core';
import {BlogPost} from '../../../models/Blog';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-header',
  imports: [
    RouterLink
  ],
  templateUrl: './blog-header.html',
  styleUrl: './blog-header.css',
})
export class BlogHeader {

  readonly post = input.required<BlogPost>();

}
