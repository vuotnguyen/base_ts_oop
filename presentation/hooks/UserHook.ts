
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "@/application/dto/user";
import { createUserUseCase, deleteUserUseCase, editUserUseCase } from "@/di/user.container";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const userKeys = {
  all: ["users"] as const,
  detail: (id: string) => ["users", id] as const,
};

export const useCreateUser = (): UseMutationResult<UserDTO, unknown, CreateUserDTO> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => createUserUseCase.execute(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useEditUser = (id: string): UseMutationResult<UserDTO, unknown, UpdateUserDTO> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => editUserUseCase.execute(id, input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.detail(id) });
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useDeleteUser = (): UseMutationResult<void, unknown, string> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (userId) => deleteUserUseCase.execute(userId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};