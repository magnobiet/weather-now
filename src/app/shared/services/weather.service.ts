import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IWeatherResponse } from '../interfaces/weather-response.interface';
import { Weather } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public byCityName(location: string): Observable<Weather> {

    const { endpoint, apiKey } = environment.openWatherMap;

    return this.httpClient
      .get<IWeatherResponse>(`${endpoint}weather?appid=${apiKey}&units=metric&q=${location}`)
      .pipe(
        map(({ name, sys, main, dt }) => {

          const { temp, pressure, humidity } = main;

          return new Weather({
            city: name,
            country: sys?.country,
            temperature: Math.round(temp),
            pressure,
            humidity,
            lastUpdate: new Date(dt * 1000)
          });

        })
      );

  }

}
