import {MdToolbar} from '@angular2-material/toolbar/toolbar'; 
import {Component, Input} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav'; 
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdButton} from '@angular2-material/button/button';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * This class represents the container component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css'],
  directives: [ 
    MdToolbar,MdIcon,MD_SIDENAV_DIRECTIVES,MD_LIST_DIRECTIVES, ROUTER_DIRECTIVES
  ] 
})
export class ContainerComponent {
     @Input() public title: string; 
     @Input() public navOptions: Array<SideNavOption>;      

     constructor () {
          console.log('ContainerComponent created.'); 
     }
}
/**
 * A side bar navigation option
 */
export class SideNavOption {
  public name: string;
  public description: string;
  public icon: string;
  public link: string;

  constructor(name,description,icon, link) {
        this.name = name;
        this.description = description;
        this.icon = icon; 
        this.link = link;
    }
}