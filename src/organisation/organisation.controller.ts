import { Controller,Post,Body,Delete,NotFoundException, Param, Get, Patch } from '@nestjs/common';
import { CreateOrganisationDto } from './dtos/create-organiation.dto';
import { UpdateOrganisationDto } from './dtos/update-organisation.dto';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController {
    constructor(private organisationService: OrganisationService) {}
    @Post('/create')
    createOrganisation(@Body() body: CreateOrganisationDto){
        this.organisationService.create(body.title,body.phone);
    }

    @Get('/:id')
    async findOrg(@Param('id') id: string){
        const organiation = this.organisationService.findOne(parseInt(id));
        if (!organiation) {
            throw new NotFoundException('user not found');
        }
        return organiation;
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.organisationService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateOrganisationDto){
        return this.organisationService.update(parseInt(id), body);
    }
}
