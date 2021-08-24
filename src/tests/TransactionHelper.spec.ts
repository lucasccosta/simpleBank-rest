import { TransactionHelper } from '../services/transaction/helper/TransactionHelper'
import { Account } from '../entities/Account'

describe('Transaction validations', () =>{
//   test('should return an MissingAccountInfoError message on undefined account', () => {
//       const transactionHelper = new TransactionHelper();
//       expect(transactionHelper.throwErrorOnMissingAccount(undefined)).toThrow()
//   })
    test('Should Create Transaction DTO', () =>{
        const transactionHelper = new TransactionHelper();
        const account = new Account();
        account.accountNum = '12345';
        account.agency = '67890';
        account.balance = 1000;
        const mock = {
            depositResult: 1010.00,
            depositFixed: 10.00,
            accountSenderNum: '12345',
            accountAgencyNum: '67890'
        }
        const dto = transactionHelper.createTransactionObject({accountInfo: account, amount: 10});
        expect(dto).toEqual(mock)
        
    })
})