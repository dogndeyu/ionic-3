import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the MySlide component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-slide',
  templateUrl: 'my-slide.html'
  
})
export class MySlide {
  // @Input("slides") slides: string[] = [];
  // @Input("pageNumber") pageNumber: number = 5;
  // @Output("slideClick") slideClick = new EventEmitter<number>();

  // mySlideOptions;
  // selectedIndex: number = 0;
  // text: string;

  constructor() {
    console.log('Hello MySlide Component');
    // this.text = 'Hello World';
  }
  ngOnInit() {
    // this.mySlideOptions = {
    //   loop: false,
    //   autoplay: false,
    //   initialSlide: 0,
    //   pager: false,
    //   slidesPerView: this.pageNumber,
    //   paginationHide: true,
    //   paginationClickable: true
    // };
  }

  onClick(index) {
    // this.selectedIndex = index;
    // this.slideClick.emit(index);
  }
}
