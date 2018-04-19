import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training app';
  creatorname = 'Mark Skeath';

  changeName() {
    this.creatorname = 'totally not mark';
  }
}
