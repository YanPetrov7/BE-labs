import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create a Nest application instance
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule, // AppModule contains the application configuration
  );

  // Serve static files from the 'public' directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Set the base directory for views to be the 'views' directory
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Set the view engine to use Handlebars (hbs files)
  app.setViewEngine('hbs');

  await app.listen(3000);
}

bootstrap();
