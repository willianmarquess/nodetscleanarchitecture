import { IFindAllUserUseCase } from './../../../useCases/user/findAllUser/interface/IFindAllUserUseCase';
import { Request, Response } from "express";
import { ICreateUserUseCase } from './../../../useCases/user/createUser/interfaces/ICreateUserUseCase';
import { IUserController } from './../interface/IUserController';
import { IUpdateUserUseCase } from '../../../useCases/user/updateUser/interfaces/IUpdateUserUseCase';
import { IFindByIdUserUseCase } from '../../../useCases/user/findByIdUser/interface/IFindByIdUserUserCase';
import { CreateUserDTO } from '../../../useCases/user/createUser/implementation/CreateUserDTO';
import { UpdateUserDTO } from '../../../useCases/user/updateUser/implementation/UpdateUserDTO';

export class UserController implements IUserController{

    constructor(private createUserUseCase: ICreateUserUseCase, 
                private findAllUserUseCase: IFindAllUserUseCase,
                private findByIdUserUseCase: IFindByIdUserUseCase,
                private updateUserUseCase: IUpdateUserUseCase,){}

    async create(request: Request, response: Response): Promise<Response> {

        const { email, password} = request.body;

        try {
            const user = await this.createUserUseCase.execute(new CreateUserDTO(email, password));
            return response.status(201).json(user); 
        } catch (error) {
            return response.status(500).json({status: false, message: error.message});
        }
    }

    async findAll(request: Request, response: Response): Promise<Response>{
        try {
            const users = await this.findAllUserUseCase.execute();
            return response.status(200).json(users); 
        } catch (error) {
            return response.status(500).json({status: false, message: error.message});
        }
    }

    async findById(request: Request, response: Response): Promise<Response>{
        const id = request.params.id;
        try {
            const user = await this.findByIdUserUseCase.execute(id);
            return response.status(200).json(user); 
        } catch (error) {
            return response.status(500).json({status: false, message: error.message});
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        const { id, email, password} = request.body;
        try {
            const user = await this.updateUserUseCase.execute(new UpdateUserDTO(id, email, password));
            return response.status(200).json(user); 
        } catch (error) {
            return response.status(500).json({status: false, message: error.message});
        }
    }

}