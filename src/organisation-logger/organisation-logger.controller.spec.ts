import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationLoggerController } from './organisation-logger.controller';

describe('OrganisationLoggerController', () => {
  let controller: OrganisationLoggerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganisationLoggerController],
    }).compile();

    controller = module.get<OrganisationLoggerController>(OrganisationLoggerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
