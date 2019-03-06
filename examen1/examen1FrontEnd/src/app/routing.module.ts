import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostItemComponent } from './posts/post-item/post-item.component';

const routes: Routes = [
  {
    path: '' ,
    component: PostsListComponent
  },
  {
    path: 'item/:id',
    component: PostItemComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
