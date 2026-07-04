import { Component } from '@angular/core';
import {AuthorHero} from '../author-hero/author-hero';
import {BlogCard} from '../blog/blog-card/blog-card';
import {BLOG_POSTS} from '../../services/blog-posts';

@Component({
  selector: 'app-home',
  imports: [
    AuthorHero,
    BlogCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  protected readonly posts = BLOG_POSTS;

}
