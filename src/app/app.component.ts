import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MyFirstAngularApp';
  contacts = [];
  constructor() {
    this.contacts = [
      {
        ID: 1,
        first_name: 'Kai' ,
        last_name: 'Young',
        email: 'kaiyoung90@mail.fresnostate.edu'
      } ,
      {
        ID: 2,
        first_name: 'Meiko' ,
        last_name: 'Nakahara',
        email: 'mobara@mail.fresnostate.edu'
      } ,
      {
        ID: 3,
        first_name: 'John' ,
        last_name: 'Smith',
        email: 'jsmith@mail.fresnostate.edu'
      }
    ];
  }

  delete(e) {
    console.log('from delete e: ', e);
    this.contacts.splice(e,1);
  }

  addRow() {
    this.contacts.unshift(      {
      ID: 1,
      first_name: 'Kai' ,
      last_name: 'Young',
      email: 'kaiyoung90@mail.fresnostate.edu'
    });
  }

  save(row) {
    console.log('from save row: ', row);
  }
}


