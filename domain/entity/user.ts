import { RANK_USER } from "../enum";

class User {
    private idUser: number;
    private name: string;
    private email: string;
    private phone: string;
    private state: boolean;
    private age: number;
    private area: string;
    private isBiometric?: boolean;
    private rankUser?: RANK_USER;
    private avatar?: string;
    private proposal?: string;
    constructor(
         idUser: number, 
         name: string, 
         email: string,
         phone: string,
         state: boolean,
         age: number,
         area: string,
         isBiometric?: boolean,
         rankUser?: RANK_USER,
         avatar?: string,
         proposal?: string
    ) { 
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.state = state;
        this.age = age;
        this.area = area;
        this.isBiometric = isBiometric;
        this.rankUser = rankUser;
        this.avatar = avatar;
        this.proposal = proposal;
    }
    private getInfoUser(): string {
        return `Id User: ${this.idUser} - Name: ${this.name} - Email: ${this.email} - Phone: ${this.phone} - State: ${this.state} - Age: ${this.age} - Area: ${this.area} - Is Biometric: ${this.isBiometric} - Rank User: ${this.rankUser} - Avatar: ${this.avatar} - Proposal: ${this.proposal}`;
    }
    private login(): boolean {
        return true;
        
    }
    private logout(): boolean {
        return true;
    }
}