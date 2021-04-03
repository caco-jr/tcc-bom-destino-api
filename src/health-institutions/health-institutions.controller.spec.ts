import { Test, TestingModule } from '@nestjs/testing';
import { HealthInstitutionsController } from './health-institutions.controller';
import { HealthInstitutionsService } from './health-institutions.service';

describe('HealthInstitutionsController', () => {
  let controller: HealthInstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthInstitutionsController],
      providers: [HealthInstitutionsService],
    }).compile();

    controller = module.get<HealthInstitutionsController>(
      HealthInstitutionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
