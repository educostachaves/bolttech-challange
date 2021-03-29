import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { UserRepository } from '../users/repositories/user.repository';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule, TypeOrmModule.forFeature([UserRepository])],
  providers: [AuthService, LocalStrategy, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
