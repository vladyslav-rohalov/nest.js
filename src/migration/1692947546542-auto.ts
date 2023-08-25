import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1692947546542 implements MigrationInterface {
    name = 'Auto1692947546542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "products"."tmp" IS 'comment'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "products"."tmp" IS NULL`);
    }

}
