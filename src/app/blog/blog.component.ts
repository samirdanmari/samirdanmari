import { Component, OnInit } from '@angular/core';
import { NewPost } from './newpost/Newpost';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';
import { SlideComponent } from 'ngx-bootstrap/carousel';
import { PostService } from '../services/post.service';
//import {AngularFireDatabase} from '@angular/fire/database'
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: true,
    imports: [FormsModule,CommonModule, RouterLink,CarouselModule,SlideComponent]
})

export  class BlogComponent {
  posts: any[] = [];
  newComment: { [key: string]: string } = {};
  selectedPost: any | null = null; // for modal

    constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  likePost(postId: string) {
    this.postService.likePost(postId);
  }
  addComment(postId: string) {
    const text = this.newComment[postId];
    if (text && text.trim()) {
      this.postService.addComment(postId, { author: 'Guest', text });
      this.newComment[postId] = '';
    }
  }
    openPost(post: any) {
    this.selectedPost = post;
  }
    closeModal() {
    this.selectedPost = null;
  }
  }
  //







