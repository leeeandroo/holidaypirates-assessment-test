import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { FakehotelService } from './fakehotel.service';
import {NgStyle} from 'angular2/common';

import { FakehotelReviewComponent } from './fakehotel-review/fakehotel-review.component';

import { Fakehotel } from './fakehotel';

@Component({
  moduleId: __moduleName,
  selector: 'fakehotel-app',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, FakehotelService],
  templateUrl: 'fakehotel.component.html',
  styleUrls: ['fakehotel.component.css'],
  directives: [ROUTER_DIRECTIVES, NgStyle, FakehotelReviewComponent],
  pipes: []
})

@RouteConfig([
])

export class FakehotelApp {

  constructor (private fakehotelService: FakehotelService) {}

  errorMessage: string;
  hotels: Fakehotel[];
  

  selectedHotel: Fakehotel;

  getHotels() {    
    this.errorMessage = null;
    this.fakehotelService.getHotels()
                     .subscribe(
                       hotels => this.hotels = hotels,
                       error =>  this.errorMessage = <any>error);
  }

  viewReview(hotel: Fakehotel) {

    if(hotel.opened) {
      hotel.reviews = null;
      hotel.opened = false;
    } else {
      this.loadReview(hotel);
    }

    
  }

  loadReview(hotel: Fakehotel) {    
    
    hotel.opened = true;

    this.fakehotelService.loadReview(hotel.id)
                    .subscribe(
                       reviews => hotel.reviews = reviews,
                       error =>  this.errorMessage = <any>error);

    this.selectedHotel = hotel;

  }

  

  
}
