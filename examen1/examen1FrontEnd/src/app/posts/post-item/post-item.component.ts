import {Component, Input, OnInit} from '@angular/core';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { CommentEditComponent } from '../comments/comment-edit/comment-edit.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}
