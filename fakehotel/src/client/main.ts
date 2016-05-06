import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import { HTTP_PROVIDERS } from 'angular2/http';


import {FakehotelApp} from './app/fakehotel.component';



if (environment.production) {
  enableProdMode();
}

bootstrap(FakehotelApp, [HTTP_PROVIDERS]);



