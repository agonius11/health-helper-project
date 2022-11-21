import { Module } from '@nestjs/common';
import { OrganisationLoggerController } from './organisation-logger.controller';
import { OrganisationLoggerService } from './organisation-logger.service';

@Module({
  controllers: [OrganisationLoggerController],
  providers: [OrganisationLoggerService]
})
export class OrganisationLoggerModule {}
