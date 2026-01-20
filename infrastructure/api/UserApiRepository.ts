import { IUserRepository } from "@/application/interface/IUserRepository";
import axios from "axios";

export class UserApiRepository implements IUserRepository {
    async createUser(userData: any): Promise<any> {
        const res = await axios.post('/api/users', userData);
        throw new Error("Method not implemented.");
    }
    async deleteUser(id: string): Promise<void> {
        const res = await axios.delete(`/api/users/${id}`);
        throw new Error("Method not implemented.");
    }
    async editUser(id: string, userData: any): Promise<any> {
        const res = await axios.put(`/api/users/${id}`, userData);
        throw new Error("Method not implemented.");
    }
}

