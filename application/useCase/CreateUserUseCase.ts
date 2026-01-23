
import type { IUserRepository } from "@/application/interface/IUserRepository";
import { CreateUserDTO, UserDTO } from "../dto/user";

/**
 * Application layer (UseCase)
 * - Orchestrates business flow
 * - No axios, no React, no UI
 */
export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(userData: CreateUserDTO): Promise<UserDTO> {
    return this.userRepository.createUser(userData);
  }
}