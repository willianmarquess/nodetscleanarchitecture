import { UserRepository } from './../../../../../infra/repository/user/implementation/UserRepository';
import { CreateUserDTO } from './CreateUserDTO';
import { User } from '../../../../../domain/User';
import { IUserRepository } from '../../../../../infra/repository/user/interface/IUserRepository';
import { ICreateUserUseCase } from './../interfaces/ICreateUserUseCase';
import UserAlreadyExistsError from '../errors/UserAlreadyExistsError';

export class CreateUserUseCase implements ICreateUserUseCase {

    constructor(private userRepository: IUserRepository) { }

    async execute(dto: CreateUserDTO): Promise<User> {
        const userExists = await this.userRepository.findByEmail(dto.email);
        if (userExists) throw new UserAlreadyExistsError();
        const user = await this.userRepository.save(new User(null, dto.email, dto.password));
        return user;
    }
}