import {UserModel} from './user.model';
import {TagModel} from './tag.model';
import {CommentModel} from './comment.model';

export class PostModel {
  constructor(
    public title: string,
    public text: string,
    public status: string,
    public likes: number,
    public user: UserModel,
    public tag: TagModel,
    public comments: CommentModel[] = []
  ) {

  }

}
