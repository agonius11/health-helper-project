import { Organisation } from 'src/organisation/organisation.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
@Entity()
export class organisationLogger {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    user: User;
    @Column()
    organisation: Organisation;
    @Column()
    role: string;
    @CreateDateColumn({nullable:true, type: 'timestamptz'})
    joinedOn: Date;



    @OneToMany(()=> User, (user)=> user.organisationlogger)
    users: User[]

    @OneToMany(()=> Organisation, (organisation)=> organisation.organisationlogger)
    organisations: Organisation[]
}