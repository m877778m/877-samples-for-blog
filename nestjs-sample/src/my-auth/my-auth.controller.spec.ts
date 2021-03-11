import { Test, TestingModule } from '@nestjs/testing';
import { MyAuthController } from './my-auth.controller';

describe('MyAuthController', () => {
  let controller: MyAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyAuthController],
    }).compile();

    controller = module.get<MyAuthController>(MyAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
