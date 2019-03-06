import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    return this.http.get<any[]>(url + tag);
  }

}
