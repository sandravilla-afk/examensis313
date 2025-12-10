import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  isDark = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Solo usar localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        this.isDark = true;
        document.documentElement.classList.add('dark');
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    const root = document.documentElement;

    if (isPlatformBrowser(this.platformId)) {
      if (this.isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}


