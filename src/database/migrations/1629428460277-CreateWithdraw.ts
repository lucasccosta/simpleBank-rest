import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBalance1629428460277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            await new Table({
                name: "withdraw",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "withdraw",
                        type: "float",

                    },
                    {
                        name: "account_sender",
                        type: "float", 
                    },
                    {
                        name: "agency_sender",
                        type: "float",
                    },
                    {
                        name: "account_receiver",
                        type: "float",
                    },
                    {
                        name: "agency_receiver",
                        type: "float",
                    },
                    {
                        name: "created_at",
                        type:"timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("withdraw")
    }

}
