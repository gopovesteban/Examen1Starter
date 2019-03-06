import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { RecommendedPostsComponent} from './recommended-posts/recommended-posts.component';
import {PostsComponent} from './posts/posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'my-posts';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
