import { userRepository } from "../../../../../infra/repository/user/implementation";
import { FindByIdUserUseCase } from "./FindByIdUserUseCase";

const findByIdUserUseCase = new FindByIdUserUseCase(userRepository);

export {findByIdUserUseCase};