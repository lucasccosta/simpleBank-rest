import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccount1629569692407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            await new Table({
                name: "account",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "CPF",
                        type: "varchar",
                        length: "14",
                        isUnique: true,

                    },
                    {
                        name: "fullName",
                        type: "varchar", 
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "agency",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "accountNum",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "balance",
                        type: "float",    
                        default: 0,
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
            })
        )
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("account")
    }

}
