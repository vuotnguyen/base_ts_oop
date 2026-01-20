import { CreateUserUseCase } from "@/application/useCase/CreateUserUseCase";
import { DeleteUserUseCase } from "@/application/useCase/DeleteUserUseCase";
import { EditUserUseCase } from "@/application/useCase/EditCustomerUseCase";
import { UserApiRepository } from "@/infrastructure/api/UserApiRepository";

const userRepository = new UserApiRepository();

export const createUserUseCase = new CreateUserUseCase(userRepository);
export const editUserUseCase = new EditUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);