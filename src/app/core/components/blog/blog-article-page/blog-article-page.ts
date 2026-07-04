import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BLOG_POSTS} from '../../../services/blog-posts';
import {buildTableOfContents} from '../../../services/blog-toc';
import {BlogHeader} from '../blog-header/blog-header';
import {BlogTableOfContents} from '../blog-table-of-contents/blog-table-of-contents';
import {BlogContentRenderer} from '../blog-content-renderer/blog-content-renderer';

@Component({
  selector: 'app-blog-article-page',
  imports: [
    BlogHeader,
    BlogTableOfContents,
    BlogContentRenderer,
    RouterLink
  ],
  templateUrl: './blog-article-page.html',
  styleUrl: './blog-article-page.css',
})
export class BlogArticlePage {

  private readonly route = inject(ActivatedRoute);

  protected readonly post = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');

    return BLOG_POSTS.find((post) => post.slug === slug);
  });

  protected readonly tableOfContents = computed(() => {
    const post = this.post();

    if (!post) {
      return [];
    }

    return buildTableOfContents(post.content);
  });

}
