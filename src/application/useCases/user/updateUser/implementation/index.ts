import { userRepository } from '../../../../../infra/repository/user/implementation';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const updateUserUseCase = new UpdateUserUseCase(userRepository);

export {updateUserUseCase};