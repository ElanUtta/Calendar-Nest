import { Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Helper } from 'src/helper/helper';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [],
  providers: [ConfigService, Logger, Helper],
})
export class UsersModule {}
