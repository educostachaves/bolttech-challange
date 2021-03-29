import { Test, TestingModule } from '@nestjs/testing';
import { ProjectEntity } from './entities/project.entity';
import { ProjectsService } from './projects.service';
import { ProjectRepository } from '../../test/mocks/repositories/project.repository';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let repo: ProjectRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService, ProjectRepository],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    repo = module.get<ProjectRepository>(ProjectRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all projects', async () => {
    const testProject: ProjectEntity = {
      id: 1,
      name: 'project',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(repo, 'find').mockResolvedValueOnce([testProject]);
    expect(await service.find()).toEqual([testProject]);
  });
});
