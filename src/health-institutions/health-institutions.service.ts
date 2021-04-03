import { Injectable } from '@nestjs/common';
import { CreateHealthInstitutionDto } from './dto/create-health-institution.dto';
import { UpdateHealthInstitutionDto } from './dto/update-health-institution.dto';

@Injectable()
export class HealthInstitutionsService {
  create(createHealthInstitutionDto: CreateHealthInstitutionDto) {
    return 'This action adds a new healthInstitution';
  }

  findAll() {
    return JSON.stringify({ hello: 'world' });
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
