import { Test, TestingModule } from '@nestjs/testing';
import { UserprofilesController } from './profiles.controller';
import { UserprofilesService } from './profiles.service';

describe('UserprofilesController', () => {
  let controller: UserprofilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserprofilesController],
      providers: [UserprofilesService],
    }).compile();

    controller = module.get<UserprofilesController>(UserprofilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
