import { Component } from '@angular/core'; 
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UsersComponent } from './users'; 
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ 
    MdToolbar,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    ROUTER_DIRECTIVES
  ],
  providers: [  MdIconRegistry, HTTP_PROVIDERS]
})
 
export class AppComponent{
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment_ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];
  
  constructor (private _router:Router) {    
  }
  
  navigate(){
    this._router.navigate(['/users']);
  }
}

