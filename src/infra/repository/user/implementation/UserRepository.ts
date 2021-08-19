import { IDocumentStore } from 'ravendb';
import { User } from '../../../../domain/User';
import { IUserRepository } from '../interface/IUserRepository';

export class UserRepository implements IUserRepository{
    
    constructor(private storeContext: IDocumentStore){}

    async save(user: User): Promise<User> {
        const session = this.storeContext.openSession();
        await session.store(user);
        await session.saveChanges();
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const session = this.storeContext.openSession();
        const user = await session.query(User).whereEquals("email", email).singleOrNull();
        return user;
    }

    async findById(id: string): Promise<User> {
        const session = this.storeContext.openSession();
        const user = await session.query(User).whereEquals("id", id).single();
        return user;
    }

    async findAll(): Promise<Array<User>> {
        const session = this.storeContext.openSession();
        const users = await session.query(User).all();
        return users;
    }

    async update(user: User): Promise<User>{
        const session = this.storeContext.openSession();
        const userToUpdate = await session.load<User>(user.id);
        userToUpdate.email = user.email;
        userToUpdate.password = user.password;
        await session.saveChanges();
        return userToUpdate;
    }

}
