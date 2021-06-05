import { createUserUseCase } from '../../../useCases/user/createUser/implementation';
import { findAllUserUseCase } from '../../../useCases/user/findAllUser/implementation';
import { findByIdUserUseCase } from '../../../useCases/user/findByIdUser/implementation';
import { updateUserUseCase } from '../../../useCases/user/updateUser/implementation';
import { UserController } from './UserController';

const userController = new UserController(createUserUseCase, findAllUserUseCase, findByIdUserUseCase, updateUserUseCase);

export {userController};