import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../app/postService';
import { AuthentificationComponent } from './app/authentification/authentification.component';
import { PostItemComponent } from './app/post-item/post-item.component';

@NgModule({
  declarations: [
  ],
  imports: [
    
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.getPosts().subscribe({
            next: (data: Post[]) => this.posts = data,
            error: (err: any) => console.error('Erreur lors de la récupération des posts', err),
        });
    }
}

