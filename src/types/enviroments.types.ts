export type TContext = {
  nodeEnv: string;
  port: number;
  mySqlHost: string;
  mySqlPort: number;
  mySqlUser: string;
  mySqlPassword: string;
  mySqlDatabase: string;
  mySqlSync: boolean;
  rabbitMqUser: string;
  rabbitMqPassword: string;
  rabbitMqHost: string;
  rabbitMqPort: number;
  rabbitMqQueueName: string;
  usersMicroservicesToken: string;
};

export type TResponse = {
  [key: number | string]: {
    statusCode: number;
    message: string | string[];
    error: string;
  };
};
