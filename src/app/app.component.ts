import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  src = 'https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png'

  onClick() {
    this.title = "Hello World!";
    this.src = 'http://i.imgur.com/TAsO0q6.png';
  }
}
