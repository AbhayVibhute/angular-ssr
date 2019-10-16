import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import 'slick-carousel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ssr';

  constructor(private route: Router) {

  }

  ngOnInit() {
    console.log(window.location.hostname);
    this.slickInit();
    localStorage.setItem('user', 'Abhay Vibhute');
  }

  slickInit() {
    $(document).ready(() => {
      setTimeout(() => {
        if (($('.field-slider') as any).hasClass('.slick-initialized')) {
          ($('.field-slider') as any).slick('unslick');
        }
        ($('.field-slider') as any).not('.slick-initialized').slick({
          vertical: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: true,
          nextArrow: `<i class="fa fa-angle-down slick-previous"
          style="position: absolute;top: 92%;left: 50%;
          z-index: 10;color:#fff;padding:4px;font-size: 40px;cursor: pointer"></i>`,
          prevArrow: `<i class="fa fa-angle-down slick-previous"
          style="display: none; position: absolute;top: -10px;left: 50%;"></i>`,
        });
      }, 1000);
    });
  }

  open() {
    localStorage.setItem('user', 'xyz');

    this.route.navigate(['/user']);
  }
}
