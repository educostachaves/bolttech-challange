import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: UserEntity,
  },
})
@ApiTags('users')
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
  constructor(public readonly service: UsersService) {}
}
