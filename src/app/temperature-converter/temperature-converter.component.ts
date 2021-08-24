import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.scss'],
})
export class TemperatureConverterComponent implements OnInit {
  private _fahrenheit: string = '';
  private _celsius: string = '';

  public get fahrenheit(): string {
    return ((Number(this._celsius) * 9) / 5 + 32).toFixed(1);
  }
  public set fahrenheit(value: string) {
    this._fahrenheit = Number(value).toFixed(1);
    console.log(Number(value).toFixed(1));
  }
  public get celsius(): string {
    return (((Number(this._fahrenheit) - 32) * 5) / 9).toFixed(1);
  }
  public set celsius(value: string) {
    this._celsius = Number(value).toFixed(1);
  }

  constructor() {}

  ngOnInit(): void {}
}
