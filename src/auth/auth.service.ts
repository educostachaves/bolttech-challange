import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserEntity = await this.usersService.findOne({ where: { username } });
    console.log(user);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}
