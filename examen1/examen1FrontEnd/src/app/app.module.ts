import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { RecommendedPostsComponent } from './recommended-posts/recommended-posts.component';
import { RecommendedPostsListComponent } from './recommended-posts/recommended-posts-list/recommended-posts-list.component';
import { RecommendedPostItemComponent } from './recommended-posts/recommended-post-item/recommended-post-item.component';
import { RecommendedCommentsComponent } from './recommended-posts/recommended-comments/recommended-comments.component';
import {Examen1Service} from './services/examen1.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsListComponent,
    PostItemComponent,
    CommentsComponent,
    HeaderComponent,
    RecommendedPostsComponent,
    RecommendedPostsListComponent,
    RecommendedPostItemComponent,
    RecommendedCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    Examen1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
