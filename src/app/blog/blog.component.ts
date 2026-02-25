import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NewPost } from './newpost/Newpost';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { SlideComponent } from 'ngx-bootstrap/carousel';
//import {AngularFireDatabase} from '@angular/fire/database'
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: true,
    imports: [FormsModule,CommonModule, CarouselModule,SlideComponent]
})

export  class BlogComponent {

  post = [
  {
    contentHeader: 'First Blog Post',
    contentBody: 'Welcome to my blog! Stay tuned for more content.'
  },
  {
    contentHeader: 'Learning Angular',
    contentBody: 'Angular 13 brought some serious improvements. Here’s what I found...'
  }
];


  affiliate = "Affialiate Market";

  newPost: NewPost[] = [
    {
      title: 'AWS',
      contentHeader: 'First Look ON Amazon Web Services',
      contentBody: '',
      contentFooter: '',
      contentImage: '',

    },
    
   ]
   
  }