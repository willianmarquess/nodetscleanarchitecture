import { userRepository } from '../../../../../infra/repository/user/implementation';
import { FindAllUserUseCase } from './FindAllUserUseCase';

const findAllUserUseCase = new FindAllUserUseCase(userRepository);

export {findAllUserUseCase};