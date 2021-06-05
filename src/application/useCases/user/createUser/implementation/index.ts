import { userRepository } from '../../../../../infra/repository/user/implementation';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCase = new CreateUserUseCase(userRepository);

export {createUserUseCase};