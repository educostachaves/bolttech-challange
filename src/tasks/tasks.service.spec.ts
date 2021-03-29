import { Test, TestingModule } from '@nestjs/testing';
import { TaskEntity } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { TaskRepository } from '../../test/mocks/repositories/task.repository';

describe('TasksService', () => {
  let service: TasksService;
  let repo: TaskRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService, TaskRepository],
    }).compile();

    service = module.get<TasksService>(TasksService);
    repo = module.get<TaskRepository>(TaskRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all tasks', async () => {
    const testTask: TaskEntity = {
      id: 1,
      name: 'task',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(repo, 'find').mockResolvedValueOnce([testTask]);
    expect(await service.find()).toEqual([testTask]);
  });
});
