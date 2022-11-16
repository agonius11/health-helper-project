import { Injectable,NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    create(email: string, firstName: string, lastName: string ){
        const user = this.repo.create({email, firstName, lastName});

        return this.repo.save(user);
    }

    findOne(id: number){
        return this.repo.findOneBy({id});
    }

    find(email: string){
        return this.repo.find({where: {email}});
    }

    async update(id: number, attrs: Partial<User>){
        const user = await this.findOne(id);
        if (!user){
            throw new NotFoundException('user not found');
        }
        Object.assign(user,attrs);
        return this.repo.save(user);
    }

    async remove(id:number){
       const user = await this.findOne(id);
       if (!user){
        throw new NotFoundException('user not found');
     }
     return this.repo.remove(user);
    }
}
