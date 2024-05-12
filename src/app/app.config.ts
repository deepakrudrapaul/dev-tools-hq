import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHotToastConfig()]
};
