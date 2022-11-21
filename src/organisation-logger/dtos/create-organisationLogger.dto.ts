import { Type } from 'class-transformer';
import { IsString,IsDate } from 'class-validator'
import { Organisation } from 'src/organisation/organisation.entity';
import { User } from 'src/user/user.entity';

export class CreateOrganisationLoggerDto {
    @IsString()
    user: User
    @IsString()
    organisation: Organisation
    @IsString()
    role: string;
    @IsDate()
    @Type(() => Date)
    joinedOn: Date;

}