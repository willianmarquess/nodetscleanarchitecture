import { UpdateUserDTO } from './UpdateUserDTO';
import { IUserRepository } from './../../../../../infra/repository/user/interface/IUserRepository';
import { IUpdateUserUseCase } from './../interfaces/IUpdateUserUseCase';
import { User } from '../../../../../domain/User';


export class UpdateUserUseCase implements IUpdateUserUseCase {

    constructor(private userRepository: IUserRepository) { }

    async execute(dto: UpdateUserDTO): Promise<User> {
        const userExists = await this.userRepository.findById(dto.id);
        if (!userExists) { throw new Error("User not exists"); }
        const user = await this.userRepository.update(new User(dto.id, dto.email, dto.password));
        return user;
    }
}