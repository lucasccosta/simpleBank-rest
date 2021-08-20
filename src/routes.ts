import {Router} from 'express'
import { CreateAccountController } from './controllers/CreateAccountController'

const router = Router()

const createPersonalDataController = new CreateAccountController()

router.post('/personal', createPersonalDataController.handleData)

export { router}