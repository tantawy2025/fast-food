import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-countries-with-uber',
  templateUrl: './countries-with-uber.component.html',
  styleUrls: ['./countries-with-uber.component.css']
})
export class CountriesWithUberComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    margin : 50,
    nav: true,
    navText: ["<div class='custom-arrow nav-button owl-prev size-7x' ><i class='custom-arrow fas fa-arrow-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-arrow-right'></i></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }

}
