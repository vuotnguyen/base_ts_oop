import { IAuthenRepository } from "@/application/interface/IAuthenRepository";
import { apiConfig } from "./apiConfig";

const ENDPOINT = {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REFRESH_TOKEN: '/api/auth/refresh-token'
}

export class AuthenApiRepository implements IAuthenRepository {
    async login(account: string, password: string): Promise<any> {
        const res = await apiConfig.post(ENDPOINT.LOGIN, { account, password });
        return res.data;
    }
    async logout(): Promise<any> {
        const res = await apiConfig.post(ENDPOINT.LOGOUT);
        return res.data;
    }
    async refreshToken(): Promise<any> {
        const res = await apiConfig.post(ENDPOINT.REFRESH_TOKEN);
        return res.data;
    }
}

