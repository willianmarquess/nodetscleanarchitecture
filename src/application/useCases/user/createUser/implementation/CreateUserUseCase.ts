import { CreateUserDTO } from './CreateUserDTO';
import { User } from '../../../../../domain/User';
import { IUserRepository } from '../../../../../infra/repository/user/interface/IUserRepository';
import { ICreateUserUseCase } from './../interfaces/ICreateUserUseCase';

export class CreateUserUseCase implements ICreateUserUseCase{

    constructor(private userRepository: IUserRepository){}

    async execute(dto: CreateUserDTO): Promise<User> {
        try {
            const userExists = await this.userRepository.findByEmail(dto.email);
            if(userExists){ throw new Error("User already exists");}
            const user = await this.userRepository.save(new User(null, dto.email, dto.password));
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}