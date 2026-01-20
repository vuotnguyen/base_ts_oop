export interface IUserRepository {
    createUser(userData: any): Promise<any>;
    deleteUser(id: string): Promise<void>;
    editUser(id: string, userData: any): Promise<any>;
}