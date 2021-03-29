import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user: UserEntity = await this.usersService.findOne({ where: { username } });

    if (!user) {
      return null;
    }

    const isMatch = await bcrypt.compare(pass, user.password);

    if (!isMatch) {
      return null;
    }

    return user;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      email: user.email,
      name: user.name,
      sub: user.id,
    };
    return {
      accessToken: this.jwtService.sign(payload),
      username: user.username,
      email: user.email,
      name: user.name,
      id: user.id,
    };
  }
}
