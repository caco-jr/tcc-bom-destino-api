import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { BASE_EXTERNAL_API_URL } from 'src/utils/url';

import { CreateHealthInstitutionDto } from './dto/create-health-institution.dto';
import { UpdateHealthInstitutionDto } from './dto/update-health-institution.dto';

@Injectable()
export class HealthInstitutionsService {
  constructor(private httpService: HttpService) {}

  create(createHealthInstitutionDto: CreateHealthInstitutionDto) {
    return 'This action adds a new healthInstitution';
  }

  findAll() {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/health-institutions`, {
        headers: {
          Accept: 'application/json',
        },
      })
      .pipe(map((response) => response.data));
  }

  findOne(id: number) {
    return `This action returns a #${id} healthInstitution`;
  }

  update(id: number, updateHealthInstitutionDto: UpdateHealthInstitutionDto) {
    return `This action updates a #${id} healthInstitution`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthInstitution`;
  }
}
