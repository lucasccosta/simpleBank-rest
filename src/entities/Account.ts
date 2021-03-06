import bcrypt from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("account")
class Account {
  
  @PrimaryColumn()
  readonly id:string

  @Column()
  CPF: string

  @Column()
  fullName: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  accountNum: string

  @Column()
  agency: string

  @Column()
  balance:number
  
  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
    this.password = bcrypt.hashSync(this.password, 8)
  }

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Account }