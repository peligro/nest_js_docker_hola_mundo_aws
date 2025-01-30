import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { ConfigModule } from '@nestjs/config';
import { SecretosService } from './servicios/secretos/secretos.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [ SecretosService],
})
export class AppModule {}
