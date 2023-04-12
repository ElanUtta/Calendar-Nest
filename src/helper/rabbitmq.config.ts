import { Transport, RmqOptions } from '@nestjs/microservices';
import { Helper } from './helper';

const helper = new Helper();
const {
  rabbitMqUser,
  rabbitMqPassword,
  rabbitMqHost,
  rabbitMqPort,
  rabbitMqQueueName,
} = helper.getEnviroment();

export const rabbitMqConsumerConfig: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: [
      `amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`,
    ],
    queue: rabbitMqQueueName,
    queueOptions: {
      durable: true,
    },
  },
};
