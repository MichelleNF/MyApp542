import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor() { }

  slideOpts={
    initialSlide:1,
    speed:200,
    slidesPerView:1.5,
    spaceBetween:5
  };

  ngOnInit() {
  }

}
