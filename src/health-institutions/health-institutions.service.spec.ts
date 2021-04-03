import { Test, TestingModule } from '@nestjs/testing';
import { HealthInstitutionsService } from './health-institutions.service';

describe('HealthInstitutionsService', () => {
  let service: HealthInstitutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthInstitutionsService],
    }).compile();

    service = module.get<HealthInstitutionsService>(HealthInstitutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
