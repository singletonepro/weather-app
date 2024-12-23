import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private readonly httpService: HttpService) {}

  async getWeatherByCity(city: string) {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    if (!apiKey) {
      throw new Error('API key is missing in environment variables.');
    }
    try {
      const response = await lastValueFrom(
        this.httpService.get(this.apiUrl, {
          params: { q: city, appid: apiKey, units: 'metric' },
        }),
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error.response?.data || error.message);
      throw new Error(
        error.response?.data?.message || 'Failed to fetch weather data from OpenWeatherMap.',
      );
    }
  }
}
