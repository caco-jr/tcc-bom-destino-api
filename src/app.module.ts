import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthInstitutionsModule } from './health-institutions/health-institutions.module';

@Module({
  imports: [HealthInstitutionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
