import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthInstitutionsModule } from './health-institutions/health-institutions.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    HealthInstitutionsModule,
    UsersModule,
    AppointmentsModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
