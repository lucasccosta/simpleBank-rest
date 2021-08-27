import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTransaction1630082638546 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            await new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "amount",
                        type: "float",
                    },
                    {
                        name: "account_sender_id",
                        type: "uuid",
                    },
                    {
                        name: "account_sender",
                        type: "varchar",
                    },
                    {
                        name: "account_receiver_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "account_receiver",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "agency_sender",
                        type: "varchar",
                    },
                    {
                        name: "agency_receiver",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "transaction_type",
                        type: "varchar",
                        isNullable: true
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
                ],
                foreignKeys:[
                    {
                        name: "FKAccountSender",
                        referencedTableName:"account",
                        referencedColumnNames: ["id"],
                        columnNames:["account_sender_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKAccount_receiver",
                        referencedTableName: "account",
                        referencedColumnNames: ["id"],
                        columnNames: ["account_receiver_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions")
    }
}
