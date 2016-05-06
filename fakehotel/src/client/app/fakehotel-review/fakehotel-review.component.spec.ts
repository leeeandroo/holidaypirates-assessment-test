import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync,
  ComponentFixture,
  TestComponentBuilder
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {FakehotelReviewComponent} from './fakehotel-review.component';

describe('FakehotelReview Component', () => {

  beforeEachProviders((): any[] => []);

  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(FakehotelReviewComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
    });
  }));

});
