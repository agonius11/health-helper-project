import { Type } from 'class-transformer';
import { IsString,IsDate, IsInt } from 'class-validator'

export class CreateOrganisationDto {
    @IsString()
    title: string;
    @IsInt()
    @Type(() => Number)
    phone: number;
    // @IsDate()
    // created_at: Date;
    // @IsDate()
    // updated_at: Date;

    
}