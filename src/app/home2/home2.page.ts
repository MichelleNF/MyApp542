import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  constructor() { }
  slideOpts={
    initialSlide:1,
    speed:200,
    slidesPerView:2.5,
    spaceBetween:5
  };
  slideOpts2={
    initialSlide:1,
    speed:200,
    slidesPerView:1.5,
    spaceBetween:5
  };

  ngOnInit() {
  }

}
