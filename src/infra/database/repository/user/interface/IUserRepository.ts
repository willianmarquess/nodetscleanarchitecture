import { User } from '../../../../../domain/User';

export interface IUserRepository{
    save(user: User): Promise<User>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    findAll(): Promise<Array<User>>
    update(user: User): Promise<User>
}