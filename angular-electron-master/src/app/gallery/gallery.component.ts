import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  flag:boolean=false;
  img="c://TakeAPeek/1~1.jpg";
  constructor(public imagesService:ImagesService) { }

  ngOnInit() {
  }


}
