import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor (private firestore: Firestore){}
  
  addPost(post: any) {
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, post);
  }

  getPosts() {
    const postRef = collection(this.firestore, 'posts');
    return collectionData(postRef, { idField: 'id' });
  }

  updatePost(postId: string, data: any) {
    const postDoc = doc(this.firestore, `posts/${postId}`);
    return updateDoc(postDoc, data);
  }

  deletePost(postId: string) {
    const postDoc = doc(this.firestore, `posts/${postId}`);
    return deleteDoc(postDoc);
  }

  addComment(postId: string, comment: any) {
    const postDoc = doc(this.firestore, `posts/${postId}`);
    const commentsRef = collection(postDoc, 'comments');
    return addDoc(commentsRef, comment);
  }
}
