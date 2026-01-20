import { IUserRepository } from "../interface/IUserRepository";

export class DeleteUserUseCase {
    private iUserRepository: IUserRepository;
    constructor(iUserRepository: IUserRepository) {
        this.iUserRepository = iUserRepository;
    }

    async execute(id: string): Promise<void> {
        // Logic to delete a user
        const data = await this.iUserRepository.deleteUser(id);
        console.log('dataa ', data);
        
    }
}