import {Router} from 'express'
import { CreateAccountController } from './controllers/CreateAccountController'
import { DeleteAccountController } from './controllers/DeleteAccountController'
import { UpdateAccountController } from './controllers/UpdateAccountController'

const router = Router()

const createPersonalDataController = new CreateAccountController()
const updateAccountController = new UpdateAccountController()
const deleteAccountController = new DeleteAccountController()

router.post('/account/create', createPersonalDataController.handleData)
router.patch('/account/update', updateAccountController.handleUpdate)
router.delete('/account/delete', deleteAccountController.handleDelete)

export { router}