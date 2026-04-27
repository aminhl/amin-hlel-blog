import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HlmAccordionImports} from '@spartan-ng/helm/accordion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmAccordionImports],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amin Hlel\'s Blog | Software engineering and Java');
}
