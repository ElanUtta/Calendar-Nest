import { ConfigService } from '@nestjs/config';
import { TContext } from 'src/types/enviroments.types';

export class Helper {
  configService: ConfigService<Record<string, unknown>, false>;
  constructor() {
    this.configService = new ConfigService();
  }

  getEnviroment(): TContext {
    return {
      nodeEnv: this.configService.get('NODE_ENV'),
      port: this.configService.get('PORT') || 3000,
      mySqlHost: this.configService.get('MYSQL_HOST'),
      mySqlPort: this.configService.get('MYSQL_PORT'),
      mySqlUser: this.configService.get('MYSQL_USER'),
      mySqlPassword: this.configService.get('MYSQL_PASSWORD'),
      mySqlDatabase: this.configService.get('MYSQL_DB'),
      mySqlSync: this.configService.get('MYSQL_SYNC'),
      rabbitMqUser: this.configService.get('RABBITMQ_USER'),
      rabbitMqPassword: this.configService.get('RABBITMQ_PASSWORD'),
      rabbitMqHost: this.configService.get('RABBITMQ_HOST'),
      rabbitMqPort: this.configService.get('RABBITMQ_PORT'),
      rabbitMqQueueName: this.configService.get('RABBITMQ_QUEUE_NAME'),
      usersMicroservicesToken: this.configService.get(
        'USER_MICROSERVICE_TOKEN',
      ),
    };
  }
}
