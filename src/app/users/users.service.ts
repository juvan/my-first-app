import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http'; 
import { Observable }     from 'rxjs/Observable';  
import 'rxjs/Rx';

@Injectable()
export class UsersService {
  private users: User[];
  
  constructor(private http:Http) {
     console.log('UsersService Service created.', http); 
  }
  
  getUsers (): Observable<User[]> {
    return this.http.get('http://api.randomuser.me/?results=100')
                    .map(this.extractData) 
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json(); 
    let userList = new Array<User>(); 
    body.results.forEach((user) => {
          userList.push(new User(user.id.value, 
                              user.name.first,
                              user.name.last,
                              user.picture.medium,
                              user.email));
        });
    return userList;     
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
 
} // end UserService class

export class User {
  id: string;
  name: string;
  surname: string;
  avatar: string; 
  email: string;
   constructor(id: string,  
                name: string,
                surname: string,
                avatar: string,
                email: string) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.avatar = avatar;
      this.email = email;
    }

}