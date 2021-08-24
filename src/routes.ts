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

router.post('/account/login', createAuthController.handleLogin)

router.post('/account/create', createAccountController.handleCreate)
router.patch('/account/update', authMiddleware, updateAccountController.handleUpdate)
router.delete('/account/delete', authMiddleware, deleteAccountController.handleDelete)
// Apenas admin
router.get('/account/filter', authMiddleware ,getAccountController.handleFilter)

router.get('/finance/history', authMiddleware ,getTransactionController.handleFilterTransaction)
router.post('/finance/transaction', authMiddleware, createTransactionController.handleTransaction)
router.patch('/finance/transfer', authMiddleware, createTransferController.handleTransfer)


export { router}