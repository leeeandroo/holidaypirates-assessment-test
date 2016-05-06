import { FakehotelReview } from './fakehotel-review/fakehotel-review';

export class Fakehotel {
  constructor (
  	public id: string, 
    public name: string,
  	public country: string,
  	public city: string,
  	public price: number,
  	public images: string[],
  	public date_start: Date,
  	public date_end: Date,
  	public stars: number,
  	public rating: number,
  	public description: string,
  	public reviews: FakehotelReview[],
  	public opened: boolean
  	) { }
}
