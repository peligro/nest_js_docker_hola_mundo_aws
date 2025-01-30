import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { SecretosService } from './servicios/secretos/secretos.service';

@Controller()
export class AppController {
  private dbConfig: any;

  constructor(private readonly secretosService: SecretosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getHello(){
    this.dbConfig = await this.secretosService.getSecret('mi-secreto');
    return {estado:"ok", mensaje:"MI CD jonathan", secreto: this.dbConfig }
  }
}
