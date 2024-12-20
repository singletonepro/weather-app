import { Body, Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherCityDto } from './dtos/weather-city.dto';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  async getWeather(@Body() weatherCityDto: WeatherCityDto) {
    return this.weatherService.getWeatherByCity(weatherCityDto);
  }
}
