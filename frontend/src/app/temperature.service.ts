import { Injectable } from '@angular/core';
import { Temperature } from './temperature';
import { TEMPERATURES } from './mock-temperatures';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() { }

  getTemperatures() : Observable<Temperature[]> {
    const temperatures = of(TEMPERATURES);
    return temperatures;
  }
}
