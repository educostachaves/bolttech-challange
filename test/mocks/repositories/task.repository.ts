import { TaskEntity } from '../../../src/tasks/entities/task.entity';
import { MockRepository } from '../mock.repository';

export class TaskRepository extends MockRepository<TaskEntity> {}
