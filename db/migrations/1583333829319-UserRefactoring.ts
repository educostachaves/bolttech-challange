import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1583333829319 implements MigrationInterface {
  name = 'UserRefactoring1583333829319';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP DEFAULT now()`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`, undefined);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`, undefined);
  }
}
