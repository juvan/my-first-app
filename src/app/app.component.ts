import { Component } from '@angular/core';    
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon'; 
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UsersComponent } from './users'; 
import {HTTP_PROVIDERS} from '@angular/http';
import { ContainerComponent, NavbarComponent } from './shared/index';
import { SideNavOption} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [  
    MD_ICON_DIRECTIVES, 
    ROUTER_DIRECTIVES,
    NavbarComponent,
    ContainerComponent
  ],
  providers: [  MdIconRegistry, HTTP_PROVIDERS]
})
 
export class AppComponent{   
  navOptions: Array<SideNavOption>;  

  constructor() { 
      let pics = new SideNavOption('Users', 'Get random users', 'account_box', '/users');
      let music = new SideNavOption('Music', 'music', 'pets', '/');
      this.navOptions = [pics,music];
      console.log('AppComponent created.', this.navOptions); 
    }    

}

