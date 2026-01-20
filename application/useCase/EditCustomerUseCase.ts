import { IUserRepository } from "../interface/IUserRepository";

export class EditUserUseCase {
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(id: string, userData: any): Promise<void> {
        // Logic to edit a user
        const user = await this.userRepository.editUser(id, userData);
        if(user) {
            console.log("User edited successfully");
        } else {
            console.log("Failed to edit user");
        }
    }

}