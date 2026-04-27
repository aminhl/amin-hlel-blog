import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ThemeToggler} from '../theme-toggler/theme-toggler';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    ThemeToggler,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
