import {
  Controller,
  UseGuards,
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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('health-institutions')
export class HealthInstitutionsController {
  constructor(
    private readonly healthInstitutionsService: HealthInstitutionsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createHealthInstitutionDto: CreateHealthInstitutionDto) {
    return this.healthInstitutionsService.create(createHealthInstitutionDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.healthInstitutionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthInstitutionsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthInstitutionsService.remove(+id);
  }
}
