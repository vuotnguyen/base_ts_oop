import { IUserRepository } from "../interface/IUserRepository";

export class CreateUserUseCase {
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData: any): Promise<void> {
        // Logic to create a user
        const user = await this.userRepository.createUser(userData);
        if(user) {
            console.log("User created successfully");
        } else {
            console.log("Failed to create user");
        }
    }

}