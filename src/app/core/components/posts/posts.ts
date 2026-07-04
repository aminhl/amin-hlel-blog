import { Component } from '@angular/core';
import {BLOG_POSTS} from '../../services/blog-posts';
import {BlogCard} from '../blog/blog-card/blog-card';

@Component({
  selector: 'app-posts',
  imports: [
    BlogCard
  ],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts {

  protected readonly posts = BLOG_POSTS;

}
