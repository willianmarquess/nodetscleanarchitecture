import { User } from "../../../../../domain/User";

export interface IFindByIdUserUseCase{
    execute(id: string): Promise<User>
}