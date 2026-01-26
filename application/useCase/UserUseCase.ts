import { UpdateUserDTO, UserDTO } from "../dto/user";
import { IUserRepository } from "../interface/IUserRepository";

export class UserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

    async executeCreate (userData: UserDTO){
        this.userRepository.createUser(userData)
    }
    async executeEdit (id: string, userUpdate: UpdateUserDTO){
        this.userRepository.editUser(id, userUpdate)
    }
    async executeDelete (id: string){
        this.userRepository.deleteUser(id)
    }
}