import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthInstitutionsService } from './health-institutions.service';
import { CreateHealthInstitutionDto } from './dto/create-health-institution.dto';
import { UpdateHealthInstitutionDto } from './dto/update-health-institution.dto';

@Controller('health-institutions')
export class HealthInstitutionsController {
  constructor(
    private readonly healthInstitutionsService: HealthInstitutionsService,
  ) {}

  @Post()
  create(@Body() createHealthInstitutionDto: CreateHealthInstitutionDto) {
    return this.healthInstitutionsService.create(createHealthInstitutionDto);
  }

  @Get()
  findAll() {
    return this.healthInstitutionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthInstitutionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHealthInstitutionDto: UpdateHealthInstitutionDto,
  ) {
    return this.healthInstitutionsService.update(
      +id,
      updateHealthInstitutionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthInstitutionsService.remove(+id);
  }
}
