import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TaskEntity } from './entities/task.entity';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TasksService extends TypeOrmCrudService<TaskEntity> {
  constructor(private readonly TaskRepository: TaskRepository) {
    super(TaskRepository);
  }
}
