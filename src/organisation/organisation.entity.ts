import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Organisation {
    @PrimaryGeneratedColumn()
    id: number ;
    @Column()
    title: string;
    @Column()
    phone: number;
    @Column()
    created_at: Date;
    @Column()
    updated_at: Date;
}
