import { Injectable } from '@angular/core';
import { Firestore, collection, doc, addDoc, updateDoc, deleteDoc, getDoc } from '@angular/fire/firestore';
import { collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private mediaRef: any;
  private uploadProgress = new BehaviorSubject<number | null>(null);

  constructor(private firestore: Firestore, private storage: Storage) {}

  // Get all posts
  getPosts(): Observable<any[]> {
    const postRef = collection(this.firestore, 'posts');
    return collectionData(postRef, { idField: 'id' }) as Observable<any[]>;
  }

  // Create a new post
  createPost(postData: any) {
    const postRef = collection(this.firestore, 'posts');
    return addDoc(postRef, { 
      ...postData, 
      likes: 0, 
      comments: [] 
    });
  }
  // 🔹 Upload media (photo or video)
  uploadMedia(file: File): Observable<number | null> {
    const filePath = `media/${Date.now()}_${file.name}`;
    this.mediaRef = ref(this.storage, filePath);
    const task = uploadBytesResumable(this.mediaRef, file);

    task.on('state_changed', snapshot => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.uploadProgress.next(Math.round(percent));
    });

    return this.uploadProgress.asObservable();
  }

  // 🔹 Get uploaded media URL
  async getUploadedMediaUrl(): Promise<string> {
    return await getDownloadURL(this.mediaRef);
  }
  // Update a post
  updatePost(postId: string, updatedData: any) {
    const postRef = doc(this.firestore, `posts/${postId}`);
    return updateDoc(postRef, updatedData);
  }

  // Delete a post
  deletePost(postId: string) {
    const postRef = doc(this.firestore, `posts/${postId}`);
    return deleteDoc(postRef);
  }

  // Like a post
  async likePost(postId: string) {
    const postRef = doc(this.firestore, `posts/${postId}`);
    const snapshot = await getDoc(postRef);
    if (snapshot.exists()) {
      const currentLikes = snapshot.data()['likes'] || 0;
      await updateDoc(postRef, { likes: currentLikes + 1 });
    }
  }

  // Add a comment
  async addComment(postId: string, comment: { author: string; text: string }) {
    const postRef = doc(this.firestore, `posts/${postId}`);
    const snapshot = await getDoc(postRef);
    if (snapshot.exists()) {
      const currentComments = snapshot.data()['comments'] || [];
      const newComment = { ...comment, createdAt: new Date().toISOString() };
      await updateDoc(postRef, { comments: [...currentComments, newComment] });
    }
  }
}






