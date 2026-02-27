import { CreateUserDTO, UpdateUserDTO } from "../dto/user";
import { IUserRepository } from "../interface/IUserRepository";

export class UserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async executeCreate (userData: CreateUserDTO){
        return await this.userRepository.createUser(userData);
    }
    async executeEdit (id: string, userUpdate: UpdateUserDTO){
        return await this.userRepository.editUser(id, userUpdate);
    }
    async executeDelete (id: string){
        return await this.userRepository.deleteUser(id);
    }
}