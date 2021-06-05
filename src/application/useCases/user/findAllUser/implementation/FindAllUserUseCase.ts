import { IUserRepository } from './../../../../../infra/repository/user/interface/IUserRepository';
import { User } from '../../../../../domain/User';
import { IFindAllUserUseCase } from './../interface/IFindAllUserUseCase';

export class FindAllUserUseCase implements IFindAllUserUseCase{

    constructor(private userRepository: IUserRepository){}

    async execute(): Promise<Array<User>> {
        try {
            const users = await this.userRepository.findAll();
            return users;
        } catch (error) {
            throw new Error(error);
        }
    }

}