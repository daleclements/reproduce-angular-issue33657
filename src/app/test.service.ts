import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  someProperty;

  constructor() {
    this.someProperty = 'value from api';
  }

  someFunction() {
    
  }
}
