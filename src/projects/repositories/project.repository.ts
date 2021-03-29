import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { ProjectEntity } from '../entities/project.entity';

@EntityRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {}
