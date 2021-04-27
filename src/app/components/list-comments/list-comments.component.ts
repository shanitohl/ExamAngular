import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {

  arrComment: Comment[];
  constructor(private commentService: CommentsService,private activateRoute: ActivatedRoute) {
    this.arrComment = [];
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async param=>{      
      this.commentService.getAllByPost(param.postId).subscribe(response => {
        this.arrComment = response.map(item => {
          return item;
        });
      });      
    });

   
  }

}
