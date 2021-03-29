import { Test, TestingModule } from '@nestjs/testing';
import { TaskRepository } from './task.repository';

describe('TaskRepository', () => {
  let repo: TaskRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRepository],
    }).compile();

    repo = module.get<TaskRepository>(TaskRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
});
