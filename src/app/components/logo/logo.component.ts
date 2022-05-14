import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo-ten',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoTenComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // Slick slider config
  public logoSlideConfig: any = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 1367,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true
      }
    },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  // Logo
  public logo = [{
    image: 'assets/img/logos/brand_beauty.png',
  }, {
    image: 'assets/img/logos/brand_domestic.png',
  }, {
    image: 'assets/img/logos/brand_holiday.png',
  }, {
    image: 'assets/img/logos/brand_medicine.png',
  }, {
    image: 'assets/img/logos/brand_rent.png',
  }, {
    image: 'assets/img/logos/brand_sport.png',
  }, {
    image: 'assets/img/logos/brand_travel.png',
  },
  ];

}
