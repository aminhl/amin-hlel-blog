import {Component, inject} from '@angular/core';
import {HlmIconImports} from '@spartan-ng/helm/icon';
import {HlmButtonImports} from '@spartan-ng/helm/button';
import {provideIcons} from '@ng-icons/core';
import {radixMoon, radixSun} from '@ng-icons/radix-icons';
import {AsyncPipe} from '@angular/common';
import {ThemeService} from '../../../core/services/theme-service';

@Component({
  selector: 'app-theme-toggler',
  imports: [
    HlmIconImports,
    HlmButtonImports,
    AsyncPipe
  ],
  providers: [
    provideIcons({
      radixSun,
      radixMoon
    })
  ],
  templateUrl: './theme-toggler.html',
  styleUrl: './theme-toggler.css',
})
export class ThemeToggler {

  private _themeService = inject(ThemeService);

  public theme$ = this._themeService.theme$;

  protected toggleTheme() {
    this._themeService.toggleDarkMode();
  }

}
