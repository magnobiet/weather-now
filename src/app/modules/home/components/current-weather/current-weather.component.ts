import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '~/shared/models/weather.model';
import { WeatherService } from '~/shared/services/weather.service';

@Component({
  selector: 'wn-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input()
  public location: string;

  public loading = true;
  public error = false;
  public weather: Weather;

  constructor(
    private weatherService: WeatherService
  ) { }

  public loadData(): void {

    this.loading = true;

    this.weatherService.byCityName(this.location).subscribe((weather) => {

      this.weather = weather;

    }, () => {

      this.loading = false;
      this.error = true;

    }, () => {
      this.loading = false;
    });

  }

  public ngOnInit(): void {
    this.loadData();
  }

}
