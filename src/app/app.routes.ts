import { provideRouter, RouterConfig } from '@angular/router';
import { UsersComponent } from './users';
import { AppComponent} from './'

export const routes: RouterConfig  = [ 
  { path: 'users', component: UsersComponent },
  { path: '',  component: UsersComponent, terminal: true}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
