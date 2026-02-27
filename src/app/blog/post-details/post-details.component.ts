import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailComponent implements OnInit {
  post: any;
  newComment = '';

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.postService.getPosts().subscribe(posts => {
        this.post = posts.find(p => p.id === postId);
      });
    }
  }

  likePost() {
    if (this.post?.id) {
      this.postService.likePost(this.post.id);
    }
  }

  addComment() {
    if (this.post?.id && this.newComment.trim()) {
      this.postService.addComment(this.post.id, { author: 'Guest', text: this.newComment });
      this.newComment = '';
    }
  }
}
