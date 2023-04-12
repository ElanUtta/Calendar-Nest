import { DataSource } from 'typeorm';
import { Helper } from '../../helper/helper';

const helperService = new Helper();

const {
  mySqlPort,
  mySqlUser,
  mySqlPassword,
  mySqlDatabase,
  mySqlHost,
  mySqlSync,
} = helperService.getEnviroment();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: mySqlHost,
        port: mySqlPort,
        username: mySqlUser,
        password: mySqlPassword,
        database: mySqlDatabase,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: mySqlSync, // put to false in production
      });

      return dataSource.initialize();
    },
  },
];
