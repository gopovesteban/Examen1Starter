import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recommended-post-item',
  templateUrl: './recommended-post-item.component.html',
  styleUrls: ['./recommended-post-item.component.css']
})
export class RecommendedPostItemComponent implements OnInit {
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}
