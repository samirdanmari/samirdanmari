import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule} from '@angular/router';
import { from } from 'rxjs';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    imports: [CommonModule, RouterModule],
    standalone: true,
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
   title : string = "SAMEER.DEV";

  ngOnInit(): void {
  }



}
