import {Router} from 'express'
import { CreateAccountController } from './controllers/account/CreateAccountController'
import { DeleteAccountController } from './controllers/account/DeleteAccountController'
import { UpdateAccountController } from './controllers/account/UpdateAccountController'
import { CreateTransactionController } from './controllers/deposit/CreateTransactionController'
import { CreateTransferController } from './controllers/deposit/CreateTransferController'

const router = Router()

const createAccountController = new CreateAccountController()
const updateAccountController = new UpdateAccountController()
const deleteAccountController = new DeleteAccountController()
const createTransactionController = new CreateTransactionController()
const createTransferController = new CreateTransferController()

router.post('/account/create', createAccountController.handleCreate)
router.patch('/account/update', updateAccountController.handleUpdate)
router.delete('/account/delete', deleteAccountController.handleDelete)

router.post('/account/transaction', createTransactionController.handleTransaction)
router.patch('/account/transfer', createTransferController.handleTransfer)

export { router}