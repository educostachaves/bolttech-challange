import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { TaskEntity } from '../entities/task.entity';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {}
