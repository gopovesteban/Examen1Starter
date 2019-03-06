import { Component, OnInit } from '@angular/core';
import {Examen1Service} from '../../services/examen1.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public myPosts;
  constructor(private examenService: Examen1Service) { }

  ngOnInit() {
    this.loadMyPosts();
  }

  loadMyPosts() {
    this.examenService.getMyPosts(12).subscribe( data => {
      this.myPosts = data;
    });
  }

}
