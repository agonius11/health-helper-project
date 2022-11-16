import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from 'typeorm';
@Entity()
export class Organisation {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    title: string;
    @Column()
    phone: number;
    // @Column()
    // created_at: Date;
    // @Column()
    // updated_at: Date;
    @AfterInsert()
    logInsert(){
        console.log('Inserted Organisation with id', this.id);
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated Organisation with id', this.id);
    }

    @AfterRemove()
    logRemove(){
        console.log('Removed Organisation with id', this.id);
    }
}
