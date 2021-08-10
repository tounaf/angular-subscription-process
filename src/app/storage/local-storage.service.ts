import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  set(key, value) {
    sessionStorage.setItem(key, value);
  }
  get(key) {
    sessionStorage.getItem(key);
  }
}
