import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMentorship } from './mentorship';

@Injectable({
  providedIn: 'root'
})
export class MenteeformService {
  data : any;
  private mentorshipURL = 'api'
  constructor( private http: HttpClient) { }
 
  
 
  /*return this.http.get<IMentorship[]>(this.mentorshipURL).pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
  ); 
   */

  }

