import { User } from './../../../../../domain/User';

export interface IFindAllUserUseCase{
    execute():Promise<Array<User>>
}