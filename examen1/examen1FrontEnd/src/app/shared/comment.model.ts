import {UserModel} from './user.model';

export class CommentModel {
  constructor(
    public comment: string,
    public user: UserModel
  ) {

  }

}
