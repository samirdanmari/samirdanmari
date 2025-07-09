import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { Auth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private mediaRef: any;
  private uploadProgress = new BehaviorSubject<number | null>(null);

  constructor(private firestore: Firestore, private storage: Storage, private auth: Auth) {}

  getCurrentUserId() {
    return this.auth.currentUser?.uid ?? '';
  }

  createPost(postData: any) {
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, postData);
  }

  uploadMedia(file: File) {
    const filePath = `media/${Date.now()}_${file.name}`;
    this.mediaRef = ref(this.storage, filePath);
    const task = uploadBytesResumable(this.mediaRef, file);

    task.on('state_changed', snapshot => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.uploadProgress.next(Math.round(percent));
    });

    return this.uploadProgress.asObservable();
  }

  async getUploadedMediaUrl() {
    return await getDownloadURL(this.mediaRef);
  }
}

  // addPost(post: any) {
  //   const postRef = collection(this.firestore, 'posts');
  //   return addDoc(postRef, post);
  // }

  // getPosts() {
  //   const postRef = collection(this.firestore, 'posts');
  //   return collectionData(postRef, { idField: 'id' });
  // }

  // updatePost(postId: string, data: any) {
  //   const postDoc = doc(this.firestore, `posts/${postId}`);
  //   return updateDoc(postDoc, data);
  // }

  // deletePost(postId: string) {
  //   const postDoc = doc(this.firestore, `posts/${postId}`);
  //   return deleteDoc(postDoc);
  // }

  // addComment(postId: string, comment: any) {
  //   const postDoc = doc(this.firestore, `posts/${postId}`);
  //   const commentsRef = collection(postDoc, 'comments');
  //   return addDoc(commentsRef, comment);
  // }

