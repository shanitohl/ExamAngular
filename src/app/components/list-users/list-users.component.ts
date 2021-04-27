import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  arrUsers: User[];

  constructor(private userService: UsersService) {
    
  }

  async ngOnInit() {
    this.arrUsers = [];  
    this.userService.getAll().subscribe(response=>{
      this.arrUsers = response.map(item=>{
        return item;
      })
    });
    
  }

}
