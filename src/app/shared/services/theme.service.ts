import { Injectable, inject } from '@angular/core';
import { NzConfig, NzConfigService } from 'ng-zorro-antd/core/config';

export type ThemeType = 'light' | 'dark' | 'compact' | 'aliyun';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private currentTheme: ThemeType = 'light';
  private nzConfigService = inject(NzConfigService);

  constructor() {
    const savedTheme = localStorage.getItem('app-theme') as ThemeType;
    this.setTheme(savedTheme || 'light');
  }

  getTheme(): ThemeType {
    return this.currentTheme;
  }

  setTheme(theme: ThemeType) {
    document.body.classList.remove('dark-theme', 'compact-theme', 'aliyun-theme');
    this.currentTheme = theme;
    localStorage.setItem('app-theme', theme);

    switch (theme) {
      case 'dark':
        document.body.classList.add('dark-theme');
        break;
      case 'compact':
        document.body.classList.add('compact-theme');
        break;
      case 'aliyun':
        document.body.classList.add('aliyun-theme');
        break;
    }
  }

  toggleDarkMode() {
    this.setTheme(this.currentTheme === 'dark' ? 'light' : 'dark');
  }
}
