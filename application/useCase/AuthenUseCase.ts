import { IAuthenRepository } from "../interface/IAuthenRepository";

export class AuthenUseCase {
    constructor(private readonly authenRepository: IAuthenRepository) {}
    async executeLogin (username: string, password: string){
        return this.authenRepository.login(username, password);
    }
    async executeLogout (){
        return this.authenRepository.logout();
    }
    async executeRefreshToken (){
        return this.authenRepository.refreshToken();

    }
}