import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrganisationModule } from './organisation/organisation.module';
import { User } from './user/user.entity';
import { Organisation } from './organisation/organisation.entity';
import { OrganisationLoggerModule } from './organisation-logger/organisation-logger.module';
import { organisationLogger } from './organisation-logger/organisationLogger.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Organisation,organisationLogger],
      synchronize: true,
    }),
    UserModule,
    OrganisationModule,
    OrganisationLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
