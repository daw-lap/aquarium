import { Component } from '@angular/core';
import { Temperature } from '../temperature';
import { TEMPERATURES } from '../mock-temperatures';
import { NgFor } from '@angular/common';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent {
  temperatures: Temperature[] = [];

  constructor(private temperatureService: TemperatureService) {
  }

  getTemperatures() : void {
    this.temperatureService.getTemperatures().subscribe(temperatures => this.temperatures = temperatures);
  }

  ngOnInit() : void {
    this.getTemperatures();
  }
}
