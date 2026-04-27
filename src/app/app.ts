import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './shared/components/navbar/navbar';
import {AuthorHero} from './core/components/author-hero/author-hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AuthorHero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amin Hlel\'s Blog | Software engineering and Java');
}
