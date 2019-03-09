import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {PostModel} from '../../shared/post.model';
import {timestamp} from 'rxjs/operators';
import {getLocaleDateTimeFormat} from '@angular/common';
import {Examen1Service} from '../../services/examen1.service';
import {UserModel} from '../../shared/user.model';
import {TagModel} from '../../shared/tag.model';
import {CommentModel} from '../../shared/comment.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('titleInput') titleInputRef: ElementRef;
  @ViewChild('textInput') textInputRef: ElementRef;
  @ViewChild('tagInput') tagInputRef: ElementRef;
  @Output() postAdded = new EventEmitter<PostModel>();
  constructor(private examenService: Examen1Service) { }

  ngOnInit() {
  }
  onAddItem() {
    const ingTitle = this.titleInputRef.nativeElement.value;
    const ingText = this.textInputRef.nativeElement.value;
    const ingTag = this.tagInputRef.nativeElement.value;
    const newPost = new PostModel(ingTitle, ingText,  'available',
      0, new UserModel(12, null, null, null), new TagModel(ingTag) , [new CommentModel(null, new UserModel(null, null, null))]);
    console.log(newPost)
    this.examenService.postPost(newPost).subscribe( data => {
    });
  }

}
