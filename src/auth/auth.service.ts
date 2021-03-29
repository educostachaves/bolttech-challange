import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserEntity = await this.usersService.findOne({ where: { username } });
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = {
      username: user.username,
      email: user.email,
      name: user.name,
      sub: user.id,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
