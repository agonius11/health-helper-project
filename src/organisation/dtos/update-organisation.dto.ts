import {IsNumber, IsOptional, IsString} from 'class-validator';

export class UpdateOrganisationDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsNumber()
    @IsOptional()
    phone: number;
}