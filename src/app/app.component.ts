import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav style="display:flex; gap:12px; padding:12px;">
      <a routerLink="">Home</a>
      <a routerLink="sobre">Sobre</a>
    </nav>
    <router-outlet />
  `,
})
export class AppComponent {}
