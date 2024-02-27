import { Injectable } from '@angular/core';
import { Temperature } from './temperature';
import { TEMPERATURES } from './mock-temperatures';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  private url = 'api/temperatures';

  constructor(
    private http: HttpClient,
  ) { }

  getTemperatures() : Observable<Temperature[]> {
    return this.http.get<Temperature[]>(this.url);
  }
}
