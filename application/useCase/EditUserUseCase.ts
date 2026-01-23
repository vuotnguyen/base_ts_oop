import { UpdateUserDTO, UserDTO } from "../dto/user";
import { IUserRepository } from "../interface/IUserRepository";

export class EditUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string, userData: UpdateUserDTO): Promise<UserDTO> {
    return this.userRepository.editUser(id, userData);
  }
}