import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNewColumnTestToProducts1692946750186 implements MigrationInterface {
    name = 'AddedNewColumnTestToProducts1692946750186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "tmp" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "tmp"`);
    }

}
