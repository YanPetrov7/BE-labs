import { Controller, Get, Param, Query, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ForecastDto } from './dto/forecast.dto';
import { Response } from 'express';

@Controller('weather')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Route handler for the root URL
  @Get()
  getIndexPage(@Query('city') city: string, @Res() res: Response): void {
    // If 'city' parameter is present in the query string, redirect to that city
    if (city) {
      res.redirect(`/weather/${city}`);
    } else {
      // Render the index page if 'city' parameter is not present
      res.render('index');
    }
  }

  // Route handler for individual cities
  @Get('/:city')
  @Render('weather')
  async getWeatherByCity(@Param('city') city: string): Promise<ForecastDto> {
    // Call the service to fetch weather data for the specified city
    const data = await this.appService.getWeather(city);
    return data;
  }
}
