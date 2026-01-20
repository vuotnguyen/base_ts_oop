import { IUserRepository } from "../interface/IUserRepository";

class EditUserUseCase {
    private iUserRepository: IUserRepository;
    constructor(iUserRepository: IUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    async execute(id: string, userData: any): Promise<any> {
        // Logic to edit a user
        const data = await this.iUserRepository.editUser(id, userData);
        if(data) {
            console.log("User edited successfully");
        } else {
            console.log("Failed to edit user");
        }
}
}