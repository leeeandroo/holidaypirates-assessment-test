import {
  beforeEachProviders,
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {FakehotelService} from './fakehotel.service';

describe('Fakehotel Service', () => {

  beforeEachProviders(() => [FakehotelService]);
  


});
