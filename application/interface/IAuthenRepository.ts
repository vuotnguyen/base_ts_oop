interface IAuthenRepository {
    login(account: string, password: string): Promise<any>;
    logout(): Promise<any>;
    refreshToken(): Promise<any>;
}


export { IAuthenRepository };
