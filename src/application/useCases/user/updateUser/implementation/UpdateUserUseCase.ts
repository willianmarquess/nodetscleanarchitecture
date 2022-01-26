import { UpdateUserDTO } from './UpdateUserDTO';
import { IUserRepository } from '../../../../../infra/database/repository/user/interface/IUserRepository';
import { IUpdateUserUseCase } from './../interfaces/IUpdateUserUseCase';
import { User } from '../../../../../domain/User';
import UserNotFoundError from '../../shared/errors/UserNotFound';

export class UpdateUserUseCase implements IUpdateUserUseCase {

    constructor(private userRepository: IUserRepository) { }

    async execute(dto: UpdateUserDTO): Promise<User> {
        const userExists = await this.userRepository.findById(dto.id);
        if (!userExists) throw new UserNotFoundError();
        const user = await this.userRepository.update(new User(dto.id, dto.email, dto.password));
        return user;
    }
}