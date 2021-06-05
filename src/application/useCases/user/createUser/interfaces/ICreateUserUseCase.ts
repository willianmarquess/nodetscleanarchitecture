import { User } from '../../../../../domain/User';
import { CreateUserDTO } from './../implementation/CreateUserDTO';

export interface ICreateUserUseCase{
    execute(dto: CreateUserDTO): Promise<User>
}