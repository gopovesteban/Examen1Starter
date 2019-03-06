import { Component, OnInit } from '@angular/core';
import {Examen1Service} from '../../services/examen1.service';

@Component({
  selector: 'app-recommended-posts-list',
  templateUrl: './recommended-posts-list.component.html',
  styleUrls: ['./recommended-posts-list.component.css']
})
export class RecommendedPostsListComponent implements OnInit {
  public recommendedPosts;
  constructor(private examenService: Examen1Service) { }

  ngOnInit() {
    this.loadRecommendedPosts();
  }
  loadRecommendedPosts() {
    this.examenService.getRecommendedPosts(3).subscribe( data => {
      this.recommendedPosts = data;
    });
  }

}
