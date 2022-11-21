import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { organisationLogger } from './organisationLogger.entity';
import { User } from 'src/user/user.entity';
import { Organisation } from 'src/organisation/organisation.entity';

@Injectable()
export class OrganisationLoggerService {
    constructor(@InjectRepository(organisationLogger) private repo: Repository<organisationLogger>){}


    create(user: User, organisation: Organisation, role: string, joinedOn: Date ){
        const orgLogger = this.repo.create({user, organisation, role,joinedOn});

        return this.repo.save(orgLogger);
    }
}
