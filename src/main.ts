import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { NzConfig, provideNzConfig } from 'ng-zorro-antd/core/config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';

const nzConfig: NzConfig = {
  message: { nzTop: 100 },
};

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideNzConfig(nzConfig), ...appConfig.providers],
});
