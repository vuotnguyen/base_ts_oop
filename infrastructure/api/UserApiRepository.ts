import { IUserRepository } from "@/application/interface/IUserRepository";
import { apiConfig } from "./apiConfig";


export class UserApiRepository implements IUserRepository {
    async createUser(userData: any): Promise<any> {
        const res = await apiConfig.post('/api/users', userData);
        return res.data;
    }
    async deleteUser(id: string): Promise<void> {
        await apiConfig.delete(`/api/users/${id}`);
    }
    async editUser(id: string, userData: any): Promise<any> {
        const res = await apiConfig.put(`/api/users/${id}`, userData);
        return res.data;
    }
}

