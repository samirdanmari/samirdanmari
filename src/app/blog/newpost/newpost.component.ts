import { Component, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
@Component({
    selector: 'app-newpost',
    templateUrl: './newpost.component.html',
    styleUrls: ['./newpost.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class NewpostComponent implements OnInit {

  title = '';
  body = '';
  mediaUrl = '';
  uploadPercent: number | null = null;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  // Handle file upload (photo or video)
  uploadImage(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.postService.uploadMedia(file).subscribe({
      next: (percent) => {
        this.uploadPercent = percent;
      },
      complete: async () => {
        this.mediaUrl = await this.postService.getUploadedMediaUrl();
      }
    });
  }

  // Submit new post
  submitPost() {
    this.postService.createPost({
      title: this.title,
      body: this.body,
      mediaUrl: this.mediaUrl,
      createdAt: new Date(),
      authorId: 'admin' // replace with Firebase Auth user ID if using login
    }).then(() => {
      this.title = '';
      this.body = '';
      this.mediaUrl = '';
      this.uploadPercent = null;
    });
  }

  isImage(url: string): boolean {
  return url.match(/\.(jpeg|jpg|gif|png)$/i) !== null;
}

isVideo(url: string): boolean {
  return url.match(/\.(mp4|webm|ogg)$/i) !== null;
}

  // Update post example
  updatePost(postId: string) {
    this.postService.updatePost(postId, {
      title: this.title,
      body: this.body,
      mediaUrl: this.mediaUrl
    });
  }

  // Delete post example
  deletePost(postId: string) {
    this.postService.deletePost(postId);
  }

  // Like post example
  likePost(postId: string) {
    this.postService.likePost(postId);
  }

  // Add comment example
  addComment(postId: string, text: string) {
    this.postService.addComment(postId, { author: 'Guest', text });
  }
}


