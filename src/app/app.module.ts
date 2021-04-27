import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListAlbumsComponent,
    ListPostsComponent,
    ListCommentsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
