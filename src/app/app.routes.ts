import { Routes } from '@angular/router';
import {BlogArticlePage} from './core/components/blog/blog-article-page/blog-article-page';
import {Home} from './core/components/home/home';
import {ComingSoon} from './shared/components/coming-soon/coming-soon';
import {Posts} from './core/components/posts/posts';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: 'blog/:slug',
    component: BlogArticlePage,
  },
  {
    path: 'posts',
    component: Posts,
  },
  {
    path: 'search',
    component: ComingSoon,
    data: {
      title: 'Search',
      description:
        'Search will be available soon. I will add a way to quickly find articles by topic, keyword, or technology.',
    },
  },
  {
    path: 'categories',
    component: ComingSoon,
    data: {
      title: 'Categories',
      description:
        'Categories will be available soon. Articles will be grouped by topics like backend engineering, system design, databases, and cloud.',
    },
  },
  {
    path: 'contributions',
    component: ComingSoon,
    data: {
      title: 'Contributions',
      description:
        'The contributions page will be available soon. It will contain projects, open-source work, and technical contributions.',
    },
  },
];
