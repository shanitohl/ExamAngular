import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  formulario: FormGroup;
  arrPost: Post[];
  constructor(private postService: PostsService) {
    this.formulario = new FormGroup({
      txtSearch: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async onSearch() {
    if (this.formulario.valid) {
      this.postService.getAllByUser(this.formulario.controls["txtSearch"].value).subscribe(response => {
        this.arrPost = response.map(item => {
          return item;
        })
      })      
    }
  }
}
