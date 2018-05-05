import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hockey app';
  creatorname = 'Mark Skeath';
  counters = [];



  addLogin() {
    this.counters.push('');
  }

  deleteLogin() {
    if (this.counters.length > 0)
    this.counters.pop();
    else
    alert ('Example Alert');
  }

}
