import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NewPost } from './Newpost';
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
 @Input() newpost : NewPost | null = null;
 @Output() edit = new EventEmitter<NewPost>();
  constructor() { }

  ngOnInit(): void {
  }

}