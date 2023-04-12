import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { respErrorMessage } from 'src/constants/http-responses.constant';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToRpc().getContext<RmqContext>();
    const headerApiKey = ctx.getMessage().properties.headers.apiKey;
    const apiKey = this.configService.get('AUTHENTICATION_MICROSERVICE_TOKEN');

    if (headerApiKey !== apiKey) {
      throw new RpcException(respErrorMessage[HttpStatus.UNAUTHORIZED]);
    }

    return true;
  }
}
