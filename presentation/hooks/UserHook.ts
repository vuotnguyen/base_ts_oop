
import { createUserUseCase, deleteUserUseCase, editUserUseCase } from "@/di/user.container";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
export const useCreateUser = (dataUser: any): UseQueryResult<any, unknown> => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () =>  createUserUseCase.execute(dataUser),
        enabled: true,
    });
    // Custom hook logic can be added here
}
export const useEditUser = (id: string, dataUser: any): UseQueryResult<any, unknown> => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () =>  editUserUseCase.execute(id, dataUser),
        enabled: true,
    });
    // Custom hook logic can be added here
}
export const useDeleteUser = (id: string): UseQueryResult<any, unknown> => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () =>  deleteUserUseCase.execute(id),
        enabled: true,
    });
    // Custom hook logic can be added here
}