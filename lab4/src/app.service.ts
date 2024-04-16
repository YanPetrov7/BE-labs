import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ForecastDto } from './dto/forecast.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) { }

  // Method to fetch weather data for a given city
  async getWeather(city: string): Promise<ForecastDto> {
    // API key for accessing OpenWeatherMap API
    const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
    // URL for fetching weather data for the specified city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    // Return a Promise for fetching weather data asynchronously
    return new Promise<ForecastDto>((resolve, reject) => {
      // Subscribe to the HTTP GET request to the OpenWeatherMap API
      this.httpService.get(url).subscribe({
        // Handler for successful response
        next: (response) => {
          // Extract relevant data from the response and construct a ForecastDto object
          const data = response.data;
          const forecastData: ForecastDto = {
            city: data.name,
            iconURL: `/img/${data.weather[0].icon}.png`,
            overcast: data.weather[0].description,
            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            pressure: data.main.pressure,
          };
          // Resolve the Promise with the forecast data
          resolve(forecastData);
        },
        // Handler for error response
        error: () => {
          // Reject the Promise with an error message if the city is not found
          reject({ message: 'City not found' });
        }
      });
    });
  }
}
