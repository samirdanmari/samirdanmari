import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    imports: [RouterOutlet, RouterLink],
    standalone: true,
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
   title : string = "Sameer";

  ngOnInit(): void {
  }



}
