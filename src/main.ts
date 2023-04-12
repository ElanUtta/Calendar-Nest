import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { Helper } from './helper/helper';
import { rabbitMqConsumerConfig } from './helper/rabbitmq.config';

async function bootstrap() {
  const helperService = new Helper();
  const logger = new Logger('bootstrap');
  const { port } = helperService.getEnviroment();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    rabbitMqConsumerConfig,
  );

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen().then(() => {
    logger.log(`Calendar microservice running on port ${port}`);
  });
}
bootstrap();
