import { IUserRepository } from '../../../../../infra/database/repository/user/interface/IUserRepository';
import { User } from '../../../../../domain/User';
import { IFindAllUserUseCase } from './../interface/IFindAllUserUseCase';

export class FindAllUserUseCase implements IFindAllUserUseCase {

    constructor(private userRepository: IUserRepository) { }

    async execute(): Promise<Array<User>> {
        return await this.userRepository.findAll();
    }
}