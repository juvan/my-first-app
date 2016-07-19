import { Component } from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav'; 
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
  directives: [MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class NavbarComponent{
    
}
