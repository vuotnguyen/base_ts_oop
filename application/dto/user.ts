import { RANK_USER, TYPE_USER } from "@/domain/enum";

// Data tranfer object dùng để chuyển đổi dữ liệu từ server -> client
export type UserDTO = {
    id: string;
    name: string;
    email: string;
    phone: string;
    state: boolean;
    age: number;
    isBiometric: boolean;
    rankUser: RANK_USER;
    avatar: string;
    isDelete: boolean;
    typeUser: TYPE_USER;
};

export type CreateUserDTO = {
    name: string;
    email?: string;
    phone?: string;
    avatar?: string;
    password?: string;
    age?: number;
}
// Partial sẽ làm cho các thuộc tính trở thành optional
// Omit sẽ loại bỏ các thuộc tính không cần thiết khi update
export type UpdateUserDTO = Partial<Omit<CreateUserDTO, 'password' | 'email' | 'phone'>> 