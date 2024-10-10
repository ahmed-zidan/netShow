import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/AppModule';

// bootstrapApplication(AppComponent, AppModule)
//   .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
