import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ApiKeyGuard } from 'src/Guards';

@Controller()
export class EventController {
  @UseGuards(ApiKeyGuard)
  @MessagePattern('createEvent')
  async createEvent() {
    console.log('foi executado aqui');
    return 'retorna o objeto criado';
  }
}
