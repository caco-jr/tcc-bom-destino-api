import { Module } from '@nestjs/common';
import { HealthInstitutionsService } from './health-institutions.service';
import { HealthInstitutionsController } from './health-institutions.controller';

@Module({
  controllers: [HealthInstitutionsController],
  providers: [HealthInstitutionsService],
})
export class HealthInstitutionsModule {}
