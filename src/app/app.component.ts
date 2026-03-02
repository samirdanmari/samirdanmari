import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "./navigation/navigation.component";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule, NavigationComponent],
})
export class AppComponent {
  title = 'samirdanmari';


}