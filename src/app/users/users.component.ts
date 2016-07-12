import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {UsersService} from './users.service';
import {User} from './users.service';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';


@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [HTTP_PROVIDERS, UsersService],
  directives: [MD_BUTTON_DIRECTIVES,MD_CARD_DIRECTIVES]
})

export class UsersComponent  implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  private users: User[];

  constructor(private usersService: UsersService) {
  }
  
  ngOnInit() { this.getUsers(); }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }
}