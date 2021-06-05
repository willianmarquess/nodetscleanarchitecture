import { User } from "../../../../../domain/User";
import { IUserRepository } from "../../../../../infra/repository/user/interface/IUserRepository";
import { IFindByIdUserUseCase } from "../interface/IFindByIdUserUserCase";

export class FindByIdUserUseCase implements IFindByIdUserUseCase{

    constructor(private userRepository: IUserRepository){}

    async execute(id: string): Promise<User> {
        try {
            return this.userRepository.findById(id);
        } catch (error) {
            throw new Error(error);
        }
    }

}