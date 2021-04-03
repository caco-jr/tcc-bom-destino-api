import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BASE_EXTERNAL_API_URL } from 'src/utils/url';

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

  findOne(id: number) {
    return this.httpService
      .get(`${BASE_EXTERNAL_API_URL}/users/${id}`)
      .pipe(map((response) => response.data));
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
