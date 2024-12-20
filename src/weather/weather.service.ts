import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private readonly httpService: HttpService) {}

  async getWeatherByCity(weatherCityDto) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const { city, units } = weatherCityDto;
    try {
      const response = await lastValueFrom(
        this.httpService.get(this.apiUrl, {
          params: { q: city, appid: apiKey, units },
        }),
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
