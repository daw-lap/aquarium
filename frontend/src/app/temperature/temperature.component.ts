import { Component } from '@angular/core';
import { Temperature } from '../temperature';
import { TEMPERATURES } from '../mock-temperatures';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent {
  temperatures = TEMPERATURES;
}
