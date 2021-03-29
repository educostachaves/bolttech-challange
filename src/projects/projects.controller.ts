import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ProjectEntity } from './entities/project.entity';
import { ProjectsService } from './projects.service';

@Crud({
  model: {
    type: ProjectEntity,
  },
})
@ApiTags('projects')
@Controller('projects')
export class ProjectsController implements CrudController<ProjectEntity> {
  constructor(public readonly service: ProjectsService) {}

  @Get('withTasks/:userId')
  async getAllWithTasks(@Param('userId') userId: number) {
    const projects = await this.service.findAllWithTasks(userId);
    return projects;
  }
}
