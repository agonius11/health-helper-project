import { AfterRemove,AfterUpdate,AfterInsert,Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { organisationLogger } from 'src/organisation-logger/organisationLogger.entity';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    email: string;
    // @Column()
    // created_at: Date;
    // @Column()
    // updated_at: Date;
    @AfterInsert()
    logInsert(){
        console.log('Inserted User with id', this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id);
    }

    @ManyToOne(() => organisationLogger, (organisationlogger) => organisationlogger.users)
    organisationlogger: organisationLogger
}
