import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthInstitutionDto } from './create-health-institution.dto';

export class UpdateHealthInstitutionDto extends PartialType(
  CreateHealthInstitutionDto,
) {}
