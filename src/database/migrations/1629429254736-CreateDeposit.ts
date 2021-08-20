import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDeposit1629429254736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            await new Table({
                name: "deposit",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "deposit",
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
    }

}
