import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Organisation } from './organisation.entity';
@Injectable()
export class OrganisationService {
    constructor(@InjectRepository(Organisation) private repo: Repository<Organisation>){}

    create(title: string, phone: number ){
        const organisation = this.repo.create({title, phone});

        return this.repo.save(organisation);
    }

    findOne(id: number){
        return this.repo.findOneBy({id});
    }

    async update(id: number, attrs: Partial<Organisation>){
        const organisation = await this.findOne(id);
        if (!organisation){
            throw new NotFoundException('user not found');
        }
        Object.assign(organisation,attrs);
        return this.repo.save(organisation);
    }

    async remove(id:number){
       const organisation = await this.findOne(id);
       if (!organisation){
        throw new NotFoundException('user not found');
     }
     return this.repo.remove(organisation);
    }


}
