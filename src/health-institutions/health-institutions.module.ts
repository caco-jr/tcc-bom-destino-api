import { HttpModule, Module } from '@nestjs/common';
import { HealthInstitutionsService } from './health-institutions.service';
import { HealthInstitutionsController } from './health-institutions.controller';

@Module({
  imports: [HttpModule],
  controllers: [HealthInstitutionsController],
  providers: [HealthInstitutionsService],
})
export class HealthInstitutionsModule {}
