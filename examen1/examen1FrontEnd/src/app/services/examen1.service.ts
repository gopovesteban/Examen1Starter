import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from '../shared/post.model';
import {CommentModel} from '../shared/comment.model';

@Injectable({
  providedIn: 'root'
})
export class Examen1Service {
  constructor(private http: HttpClient) { }

  getMyPosts(id: number): Observable<any[]> {
    const url = 'http://localhost:8080/examen1/getByUser/';
    return this.http.get<any[]>(url + id);
  }
  getRecommendedPosts(tag: number): Observable<any[]> {
    const url = 'http://localhost:8080/examen1/getByTag/';
    return this.http.get<any[]>(url + tag );
  }
  postPost(postt: PostModel): Observable<any[]> {
    const url = 'http://localhost:8080/examen1/createPost';
    console.log(postt);
    const post = JSON.stringify(postt)
    return this.http.post<any[]>(url , post );
  }
  postComment(comment: CommentModel): Observable<any[]> {
    const url = 'http://localhost:8080/examen1/createComment/';
    //const comment = JSON.stringify(commentt)
    return this.http.post<any[]>(url , comment );
  }


}
