import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NewPost } from './newpost/Newpost';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';
//import {AngularFireDatabase} from '@angular/fire/database'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export  class BlogComponent {

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
post: any;
   createNewPost():void{
    
   }
  /*
  posts: any [];

    constructor (private db: AngularFireDatabase){
     // Retrieve blog posts from Firebase
    this.db.list('/posts').valueChanges().subscribe(posts => {
      this.posts = posts;
    });
    }
    createPost(title: string, content: string) {
      // Create a new post
      this.db.list('/posts').push({ title, content });
    }

    updatePost(key: string, updatedTitle: string, updatedContent: string) {
      // Update a post
      this.db.object(`/posts/${key}`).update({ title: updatedTitle, content: updatedContent });
    }

    deletePost(key: string) {
      // Delete a post
      this.db.object(`/posts/${key}`).remove();
    }
    */
  }

  

  /*
editTask(arg0: string,$event: NewPost) {
throw new Error('Method not implemented.');
}
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];
  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  */

  
 
  
