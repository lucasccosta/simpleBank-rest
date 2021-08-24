import {Router} from 'express'
import { CreateAccountController } from './controllers/account/CreateAccountController'
import { DeleteAccountController } from './controllers/account/DeleteAccountController'
import { GetAccountController } from './controllers/account/GetAccountController'
import { UpdateAccountController } from './controllers/account/UpdateAccountController'
import { CreateTransactionController } from './controllers/transaction/CreateTransactionController'
import { CreateTransferController } from './controllers/transaction/CreateTransferController'
import { GetTransactionController } from './controllers/transaction/GetTransacionController'
import {CreateAuthController } from './controllers/auth/AuthController'
import authMiddleware from './middlewares/authMiddleware'

const router = Router()

const createAccountController = new CreateAccountController()
const updateAccountController = new UpdateAccountController()
const deleteAccountController = new DeleteAccountController()
const createTransactionController = new CreateTransactionController()
const createTransferController = new CreateTransferController()
const getAccountController = new GetAccountController()
const getTransactionController = new GetTransactionController()
const createAuthController = new CreateAuthController

router.post('/account/auth', createAuthController.handleCreate)


router.post('/account/create', createAccountController.handleCreate)
router.patch('/account/update', updateAccountController.handleUpdate)
router.delete('/account/delete', deleteAccountController.handleDelete)

router.post('/account/transaction', createTransactionController.handleTransaction)
router.patch('/account/transfer', createTransferController.handleTransfer)

router.get('/account/filter', authMiddleware ,getAccountController.handleFilter)
router.get('/account/transaction', getTransactionController.handleFilterTransaction)

export { router}