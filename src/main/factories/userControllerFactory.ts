import { FindByIdUserUseCase } from './../../application/useCases/user/findByIdUser/implementation/FindByIdUserUseCase';
import { FindAllUserUseCase } from './../../application/useCases/user/findAllUser/implementation/FindAllUserUseCase';
import { UpdateUserUseCase } from './../../application/useCases/user/updateUser/implementation/UpdateUserUseCase';
import { UserRepository } from './../../infra/repository/user/implementation/UserRepository';
import { CreateUserUseCase } from './../../application/useCases/user/createUser/implementation/CreateUserUseCase';
import { UserController } from './../../application/controller/user/implementation/UserController';
import { ravenContext } from '../../infra/repository/shared';

export const userControllerFactory = () : UserController => {
    const userRepository = new UserRepository(ravenContext);
    const createUserUseCase  = new CreateUserUseCase(userRepository);
    const updateUserUseCase  = new UpdateUserUseCase(userRepository);
    const findAllUserUseCase  = new FindAllUserUseCase(userRepository);
    const findByIdUserUseCase  = new FindByIdUserUseCase(userRepository);
    return new UserController(createUserUseCase, findAllUserUseCase, findByIdUserUseCase, updateUserUseCase);
} 