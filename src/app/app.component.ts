import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training app';
  creatorname = 'Mark Skeath';
  counters = [];

  changeName() {
    this.creatorname = 'totally not mark';
  }

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
