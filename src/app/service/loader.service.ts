import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  next: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  display(val) {
    console.log(val);
    this.next.next(val);
  }
}
