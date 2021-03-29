import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { ProjectEntity } from '../../projects/entities/project.entity';
import {
  Column,
  Entity,
  OneToMany,
  BeforeInsert,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, Number(process.env.HASH_SALT));
  }

  @OneToMany(
    () => ProjectEntity,
    project => project.user,
  )
  projects: ProjectEntity[];
}
