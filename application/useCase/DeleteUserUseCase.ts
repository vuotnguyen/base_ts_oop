import { IUserRepository } from "../interface/IUserRepository";

export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}