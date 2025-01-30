import { Test, TestingModule } from '@nestjs/testing';
import { SecretosService } from './secretos.service';

describe('SecretosService', () => {
  let service: SecretosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecretosService],
    }).compile();

    service = module.get<SecretosService>(SecretosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
