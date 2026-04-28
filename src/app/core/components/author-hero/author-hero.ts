import { Component } from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {HlmButton} from '@spartan-ng/helm/button';
import {HlmIcon} from '@spartan-ng/helm/icon';
import {NgIcon, provideIcons} from '@ng-icons/core';
import {radixEnvelopeClosed} from '@ng-icons/radix-icons';
import {
  remixFacebookFill,
  remixGithubLine,
  remixLinkedinFill,
  remixRssFill,
  remixTwitterXFill
} from '@ng-icons/remixicon';

@Component({
  selector: 'app-author-hero',
  imports: [
    HlmButton,
    HlmIcon,
    NgIcon
  ],
  providers: [
    provideIcons({radixEnvelopeClosed, remixGithubLine, remixTwitterXFill, remixFacebookFill, remixLinkedinFill, remixRssFill})
  ],
  templateUrl: './author-hero.html',
  styleUrl: './author-hero.css',
})
export class AuthorHero {}
