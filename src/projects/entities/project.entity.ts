import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ApiProperty()
  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @ApiProperty({ type: 'number' })
  @ManyToOne(
    () => UserEntity,
    user => user.projects,
  )
  user: UserEntity;

  @OneToMany(
    () => TaskEntity,
    task => task.project,
  )
  tasks: TaskEntity[];
}
