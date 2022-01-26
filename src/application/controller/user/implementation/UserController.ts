import { IFindAllUserUseCase } from './../../../useCases/user/findAllUser/interface/IFindAllUserUseCase';
import { Request, Response } from "express";
import { ICreateUserUseCase } from './../../../useCases/user/createUser/interfaces/ICreateUserUseCase';
import { IUserController } from './../interface/IUserController';
import { IUpdateUserUseCase } from '../../../useCases/user/updateUser/interfaces/IUpdateUserUseCase';
import { IFindByIdUserUseCase } from '../../../useCases/user/findByIdUser/interface/IFindByIdUserUserCase';
import { CreateUserDTO } from '../../../useCases/user/createUser/implementation/CreateUserDTO';
import { UpdateUserDTO } from '../../../useCases/user/updateUser/implementation/UpdateUserDTO';
import InvalidParamsError from '../../../../main/shared/errors/InvalidParamsError';
import HttpResponse from '../../../../main/shared/http/HttpResponse';
import RequestDTO from '../../../../main/shared/http/RequestDTO';
import ResponseDTO from '../../../../main/shared/http/ResponseDTO';

export class UserController implements IUserController{

    constructor(private createUserUseCase: ICreateUserUseCase, 
                private findAllUserUseCase: IFindAllUserUseCase,
                private findByIdUserUseCase: IFindByIdUserUseCase,
                private updateUserUseCase: IUpdateUserUseCase,){}

    async create(request: RequestDTO): Promise<ResponseDTO> {
        try {
            const { email, password } = request.body;
            const createUserDTO = new CreateUserDTO(email, password);
            if(!createUserDTO.isValid()) throw new InvalidParamsError(createUserDTO.getErrors());
            const user = await this.createUserUseCase.execute(createUserDTO);
            return HttpResponse.created(user); 
        } catch (error) {
             return HttpResponse.errorRequest(error);
        }
    }

    async update(request: RequestDTO): Promise<ResponseDTO> {
        try {
            const { id, email, password} = request.body;
            const updateUserDTO = new UpdateUserDTO(id, email, password);
            if(!updateUserDTO.isValid()) throw new InvalidParamsError(updateUserDTO.getErrors());
            const user = await this.updateUserUseCase.execute(updateUserDTO);
            return HttpResponse.ok(user);
        } catch (error) {
             return HttpResponse.errorRequest(error);
        }
    }

    async findAll(request: RequestDTO): Promise<ResponseDTO>{
        try {
            const users = await this.findAllUserUseCase.execute();
            return HttpResponse.ok(users); 
        } catch (error) {
             return HttpResponse.errorRequest(error);
        }
    }

    async findById(request: RequestDTO): Promise<ResponseDTO>{
        const id = request.params.id;
        try {
            const user = await this.findByIdUserUseCase.execute(id);
            return HttpResponse.ok(user);  
        } catch (error) {
             return HttpResponse.errorRequest(error);
        }
    }

}