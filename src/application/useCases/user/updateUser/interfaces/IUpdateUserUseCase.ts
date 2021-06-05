import { User } from '../../../../../domain/User';
import { UpdateUserDTO } from './../implementation/UpdateUserDTO';

export interface IUpdateUserUseCase{
    execute(dto: UpdateUserDTO): Promise<User>
}