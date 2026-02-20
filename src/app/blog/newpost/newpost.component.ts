import { Component, OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';
@Component({
    selector: 'app-newpost',
    templateUrl: './newpost.component.html',
    styleUrls: ['./newpost.component.css'],
    standalone: false
})
export class NewpostComponent implements OnInit {

 title = '';
  body = '';
  mediaUrl = '';
  uploadPercent: number | null = null;
  constructor(private postService: PostService) {}


  uploadImage(event: any) {
    this.postService.uploadMedia(event.target.files[0]).subscribe(percent => {
      this.uploadPercent = percent;
    }, null, () => {
      this.postService.getUploadedMediaUrl().then(url => this.mediaUrl = url);
    });
  }

  submitPost() {
    this.postService.createPost({
      title: this.title,
      body: this.body,
      mediaUrl: this.mediaUrl,
      createdAt: new Date(),
      authorId: this.postService.getCurrentUserId()
    });
  }

  ngOnInit(): void {
  }

}