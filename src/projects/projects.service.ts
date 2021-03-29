import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ProjectEntity } from './entities/project.entity';
import { ProjectRepository } from './repositories/project.repository';

@Injectable()
export class ProjectsService extends TypeOrmCrudService<ProjectEntity> {
  constructor(private readonly ProjectRepository: ProjectRepository) {
    super(ProjectRepository);
  }
}
