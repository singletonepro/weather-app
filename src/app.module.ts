import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { WeatherController } from './weather/weather.controller';

@Module({
  imports: [WeatherModule],
  controllers: [WeatherController],
  providers: [],
})
export class AppModule {}
