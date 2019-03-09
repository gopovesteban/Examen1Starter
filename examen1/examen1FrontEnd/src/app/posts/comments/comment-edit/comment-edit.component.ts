import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PostModel} from '../../../shared/post.model';
import {UserModel} from '../../../shared/user.model';
import {TagModel} from '../../../shared/tag.model';
import {CommentModel} from '../../../shared/comment.model';
import {Examen1Service} from '../../../services/examen1.service';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  @ViewChild('commentInput') commentInputRef: ElementRef;
  @Output() commentAdded = new EventEmitter<CommentModel>();
  constructor(private examenService: Examen1Service) { }
  ngOnInit() {
  }
  onAddItem() {
    const ingComment = this.commentInputRef.nativeElement.value;
    const newComment = new CommentModel(ingComment,  new UserModel(12, null, null, null));
    this.commentAdded.emit(newComment);
    this.examenService.postComment(newComment).subscribe( data => {
    });
  }

}
