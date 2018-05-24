import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {
  }

  // getHeros(): Hero[] {
  //   return HEROES;
  // }
  /*
    observable 객체를 활용
   */
  getHeros(): Observable<Hero[]> {
    return of(HEROES);
  }
}
