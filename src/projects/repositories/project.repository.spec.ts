import { Test, TestingModule } from '@nestjs/testing';
import { ProjectRepository } from './project.repository';

describe('ProjectRepository', () => {
  let repo: ProjectRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectRepository],
    }).compile();

    repo = module.get<ProjectRepository>(ProjectRepository);
  });

  it('should be defined', () => {
    expect(repo).toBeDefined();
  });
});
