import { Test, TestingModule } from '@nestjs/testing';
import { OrganisationLoggerService } from './organisation-logger.service';

describe('OrganisationLoggerService', () => {
  let service: OrganisationLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganisationLoggerService],
    }).compile();

    service = module.get<OrganisationLoggerService>(OrganisationLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
