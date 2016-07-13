import { Component } from '@angular/core';  
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UsersComponent } from './users'; 
import {HTTP_PROVIDERS} from '@angular/http';
import { ToolbarComponent, NavbarComponent } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [  
    MdIcon,
    ROUTER_DIRECTIVES,
    NavbarComponent,
    ToolbarComponent
  ],
  providers: [  MdIconRegistry, HTTP_PROVIDERS]
})
 
export class AppComponent{  
}

