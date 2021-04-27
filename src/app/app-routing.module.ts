import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: ListUsersComponent },

  { path: "users", component: ListUsersComponent },
  { path: "albums", component: ListAlbumsComponent },
  { path: "posts", component: ListPostsComponent },  
  {
    path: "post/:postId", component: ListCommentsComponent
  },
  { path: "**", component: ListUsersComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
