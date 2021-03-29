import { ApiProperty } from '@nestjs/swagger';
import { ProjectEntity } from '../../projects/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ type: 'boolean' })
  done: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @ApiProperty({ type: 'number' })
  @ManyToOne(
    () => ProjectEntity,
    project => project.tasks,
  )
  project: ProjectEntity;
}
