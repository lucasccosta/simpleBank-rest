import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Account } from "./Account";
import { v4 as uuid } from "uuid";

@Entity("transactions")
class Transaction {
  
  @PrimaryColumn()
  readonly id: string
  
  @Column()
  amount:number

  @Column()
  account_sender: string
  
  @Column()
  account_sender_id: string

  @JoinColumn({name: "account_sender_id"})
  @ManyToOne(()=> Account)
  accountSenderId: Account

  @Column()
  agency_sender: string

  @Column()
  account_receiver: string

  @Column()
  account_receiver_id: string

  @Column()
  transaction_type:string

  @JoinColumn({name: "account_receiver_id"})
  @ManyToOne(()=> Account)
  accountReceiverId: Account

  @Column()
  agency_receiver: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { Transaction }