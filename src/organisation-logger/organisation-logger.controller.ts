import { Body, Controller, Post } from '@nestjs/common';
import { OrganisationLoggerService } from './organisation-logger.service';
import { CreateOrganisationLoggerDto } from './dtos/create-organisationLogger.dto';

@Controller('organisation-logger')
export class OrganisationLoggerController {
    constructor(private organisationLoggerService: OrganisationLoggerService) {}

    @Post('/createOrgLogger')
    createOrganisationLogger(@Body() body: CreateOrganisationLoggerDto){
        this.organisationLoggerService.create(body.user, body.organisation, body.role, body.joinedOn);
    }
}
