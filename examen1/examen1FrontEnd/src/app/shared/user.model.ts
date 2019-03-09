import {TagModel} from './tag.model';

export class UserModel {
  constructor(
    public id: number,
    public nickname: string,
    public status: string,
    public preferences: TagModel[] = []
  ) {

  }

}
