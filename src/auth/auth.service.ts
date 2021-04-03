import { Injectable } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(cpf: string, pass: string) {
    try {
      const user = await this.usersService.findOne(cpf);

      if (user?.password === pass) {
        const { password, ...result } = user;

        return result;
      }

      return null;
    } catch (error) {
      console.error(error);
    }
  }
}
