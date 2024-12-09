import { Component, Injectable, OnInit } from '@angular/core';
import { Post } from '../models/models.pst';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';


@Injectable({
  providedIn: 'root'
})

export class PostService {
  posts: any;
  
  deletePost(id: string): void {
    this.posts = this.posts.filter((post: { _id: string; }) => post._id !== id);
    private apiUrl = 'http://localhost:5000/post';

    constructor(private http: HttpClient) {}
  
    getPosts(): Observable<Post[]> {
      return this.http.get<Post[]>(this.apiUrl);
    }
  
    getPostById(id: string): Observable<Post> {
      return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }
  }
}




