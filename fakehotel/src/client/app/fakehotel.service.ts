import {Injectable} from 'angular2/core';
import { Http, Response, URLSearchParams } from 'angular2/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/Rx';


import { Fakehotel } from './fakehotel';
import { FakehotelReview } from './fakehotel-review/fakehotel-review';


@Injectable()
export class FakehotelService {

  	constructor(private http: Http) {}

  	private hotelsURL = 'http://fake-hotel-api.herokuapp.com/api/hotels';
  	private reviewURL = 'http://fake-hotel-api.herokuapp.com/api/reviews';


	getHotels (): Observable<Fakehotel[]> {

		var params = new URLSearchParams();
		params.set('count', '5'); 


	    return this.http.get(this.hotelsURL, { 'search': params })
	                    .map(this.extractHotelData)
	                    .catch(this.handleError);
	  }

	loadReview(id): Observable<FakehotelReview[]> {

		var params = new URLSearchParams();
		params.set('hotel_id', id); 

	    return this.http.get(this.reviewURL, { 'search': params })
	                    .map(this.extractHotelReviewData)
	                    .catch(this.handleError);
	}


	private extractHotelData(res: Response) {
		
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}

		let body = res.json();

		let hotels = [];
		
		for (let item of body) {
			hotels.push( new Fakehotel(item.id, item.name, item.country, item.city, item.price, item.images, new Date(item.date_start), new Date(item.date_end), item.stars, item.rating, item.description, [], false) );
		}
		
		return hotels;
	}

	private extractHotelReviewData(res: Response) {
		
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status);
		}

		let body = res.json();
		let reviews = [];

		for (let item of body) {
			reviews.push( new FakehotelReview(item.name, item.comment, item.positive, item.hotel_id) );
		}

		return reviews;
	}

	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error.message || 'Server error';
		//console.error(errMsg); // log to console instead

		return Observable.throw(errMsg);
	}

}
