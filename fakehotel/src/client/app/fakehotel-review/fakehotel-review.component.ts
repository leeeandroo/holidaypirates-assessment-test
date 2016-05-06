import {Component, OnInit, Input } from 'angular2/core';
import { HTTP_PROVIDERS }    from 'angular2/http';
import { Observable }       from 'rxjs/Observable';

import { FakehotelService } from './../fakehotel.service';

import { FakehotelReview } from './fakehotel-review';

@Component({
  moduleId: __moduleName,
  selector: 'fakehotel-review',
  templateUrl: 'fakehotel-review.component.html',
  styleUrls: ['fakehotel-review.component.css'],
  providers: [HTTP_PROVIDERS, FakehotelService],
})
export class FakehotelReviewComponent implements OnInit {

  constructor (private fakehotelService: FakehotelService) {}


  @Input() reviews: FakehotelReview[];
  
  ngOnInit() {
  }

}
