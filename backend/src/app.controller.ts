import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SecretosService } from './servicios/secretos/secretos.service';

@Controller()
export class AppController {
   
  constructor(private readonly secretosService: SecretosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getHello(){
    let secreto = await this.secretosService.getSecret('mi-secreto');
    return {estado:"ok", mensaje:"MI CD jonathan", secreto: secreto }
  }
}
