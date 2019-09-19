import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private imageService:ImagesService) { }

  ngOnInit() {
    this.imageService.isHome=true;
  }
  goToImage(){
this.router.navigate(['gallery']);
  }
}
