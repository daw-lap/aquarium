import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Temperature } from './temperature';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const temperatures = [
      { aquarium: "Salon", temperature: 23},
      { aquarium: "Sypialnia", temperature: 25.3}
    ];
    return {temperatures};
  }
  genId(temperatures: Temperature[]): number {
    return temperatures.length > 0 ? Math.max(...temperatures.map(temperature => temperature.id)) + 1 : 11;
  }
  constructor() { }
}
