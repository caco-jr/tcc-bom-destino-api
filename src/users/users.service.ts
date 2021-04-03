import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BASE_EXTERNAL_API_URL } from 'src/utils/url';
import { Observable } from 'rxjs';

export type IUser = {
  birthDate: Date;
  cpf: string;
  email: string;
  lastName: string;
  motherName: string;
  name: string;
  password: string;
  rg: string;
};

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  create(createUserDto: CreateUserDto) {
    return this.httpService
      .post(`${BASE_EXTERNAL_API_URL}/users`, createUserDto)
      .pipe(map((response) => response.data));
  }

  findAll() {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/users`)
      .pipe(map((response) => response.data));
  }

  findOne(cpf: string): Observable<AxiosResponse<IUser | undefined>> {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/users`)
      .pipe(map((response) => response.data.find((item) => item.cpf === cpf)));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.httpService
      .patch(`${BASE_EXTERNAL_API_URL}/users/${id}`, updateUserDto)
      .pipe(map((response) => response.data));
  }

  remove(id: number) {
    return this.httpService
      .delete(`${BASE_EXTERNAL_API_URL}/users/${id}`)
      .pipe(map((response) => response.data));
  }
}
