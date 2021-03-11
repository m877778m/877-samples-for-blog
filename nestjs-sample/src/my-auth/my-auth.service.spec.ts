import { Test, TestingModule } from '@nestjs/testing';
import { MyAuthService } from './my-auth.service';

describe('MyAuthService', () => {
  let service: MyAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyAuthService],
    }).compile();

    service = module.get<MyAuthService>(MyAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
