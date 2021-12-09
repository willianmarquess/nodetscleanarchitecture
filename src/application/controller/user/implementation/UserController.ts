import { IFindAllUserUseCase } from './../../../useCases/user/findAllUser/interface/IFindAllUserUseCase';
import { Request, Response } from "express";
import { ICreateUserUseCase } from './../../../useCases/user/createUser/interfaces/ICreateUserUseCase';
import { IUserController } from './../interface/IUserController';
import { IUpdateUserUseCase } from '../../../useCases/user/updateUser/interfaces/IUpdateUserUseCase';
import { IFindByIdUserUseCase } from '../../../useCases/user/findByIdUser/interface/IFindByIdUserUserCase';
import { CreateUserDTO } from '../../../useCases/user/createUser/implementation/CreateUserDTO';
import { UpdateUserDTO } from '../../../useCases/user/updateUser/implementation/UpdateUserDTO';
import InvalidParamsError from '../../../../shared/errors/InvalidParamsError';
import HttpResponse from '../../../../shared/http/HttpResponse';

export class UserController implements IUserController{

    constructor(private createUserUseCase: ICreateUserUseCase, 
                private findAllUserUseCase: IFindAllUserUseCase,
                private findByIdUserUseCase: IFindByIdUserUseCase,
                private updateUserUseCase: IUpdateUserUseCase,){}

    async create(request: Request, response: Response): Promise<Response> {
        try {
            const { email, password } = request.body;
            const createUserDTO = new CreateUserDTO(email, password);
            if(!createUserDTO.isValid()) throw new InvalidParamsError(createUserDTO.getErrors());
            const user = await this.createUserUseCase.execute(createUserDTO);
            return HttpResponse.created(response, user); 
        } catch (error) {
            return HttpResponse.errorRequest(response, error);
        }
    }

    async update(request: Request, response: Response): Promise<Response> {
        try {
            const { id, email, password} = request.body;
            const updateUserDTO = new UpdateUserDTO(id, email, password);
            if(!updateUserDTO.isValid()) throw new InvalidParamsError(updateUserDTO.getErrors());
            const user = await this.updateUserUseCase.execute(updateUserDTO);
            return HttpResponse.ok(response, user);
        } catch (error) {
            return HttpResponse.errorRequest(response, error);
        }
    }

    async findAll(request: Request, response: Response): Promise<Response>{
        try {
            const users = await this.findAllUserUseCase.execute();
            return HttpResponse.ok(response, users); 
        } catch (error) {
            return HttpResponse.errorRequest(response, error);
        }
    }

    async findById(request: Request, response: Response): Promise<Response>{
        const id = request.params.id;
        try {
            const user = await this.findByIdUserUseCase.execute(id);
            return HttpResponse.ok(response, user);  
        } catch (error) {
            return HttpResponse.errorRequest(response, error);
        }
    }

}