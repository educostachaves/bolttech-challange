import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
