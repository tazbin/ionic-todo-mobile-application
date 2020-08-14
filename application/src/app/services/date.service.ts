import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getDate(){
    const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true };
    const prnDt = new Date().toLocaleTimeString('en-us', options).split(',');
    return prnDt[0]+', '+prnDt[1]+', '+prnDt[2];
  }
}
