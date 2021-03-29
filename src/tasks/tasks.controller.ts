import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { TaskEntity } from './entities/task.entity';
import { TasksService } from './tasks.service';

@Crud({
  model: {
    type: TaskEntity,
  },
})
@ApiTags('tasks')
@Controller('tasks')
export class TasksController implements CrudController<TaskEntity> {
  constructor(public readonly service: TasksService) {}
}
