import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/models/album.model';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
  formulario: FormGroup;
  arrAlbums: Album[];
  constructor(private albumService: AlbumsService) {
    this.formulario = new FormGroup({
      txtSearch: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  async onSearch() {
    if (this.formulario.valid) {      
      this.albumService.getAllByUser(this.formulario.controls["txtSearch"].value).subscribe(response => {
        this.arrAlbums = response.map(item => {
          return item
        })
      });
      
    }
  }


}
