import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<ProjectEntity> {
  constructor(private readonly ProjectRepository: ProjectRepository) {
    super(ProjectRepository);
  }

  async findAllWithTasks(userId: number) {
    const projects: ProjectEntity[] = await this.ProjectRepository.find({
      where: { user: userId },
      order: {
        createdAt: 'ASC',
      },
      relations: ['tasks'],
    });

    return projects;
  }
}
