import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { BASE_EXTERNAL_API_URL } from 'src/utils/url';

@Injectable()
export class AppointmentsService {
  constructor(private httpService: HttpService) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.httpService
      .post(`${BASE_EXTERNAL_API_URL}/appointments`, createAppointmentDto)
      .pipe(map((response) => response.data));
  }

  findAll() {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/appointments`)
      .pipe(map((response) => response.data));
  }

  findOne(id: number) {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/appointments/${id}`)
      .pipe(map((response) => response.data));
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.httpService
      .put(`${BASE_EXTERNAL_API_URL}/appointments/${id}`, updateAppointmentDto)
      .pipe(map((response) => response.data));
  }

  remove(id: number) {
    return this.httpService
      .delete(`${BASE_EXTERNAL_API_URL}/appointments/${id}`)
      .pipe(map((response) => response.data));
  }
}
