
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "@/application/dto/user";
import { userUseCase } from "@/di/user.container";

import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

const userKeys = {
  all: ["users"] as const,
  detail: (id: string) => ["users", id] as const,
};

export const useCreateUser = (): UseMutationResult<UserDTO, unknown, CreateUserDTO> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => userUseCase.executeCreate(input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useEditUser = (id: string): UseMutationResult<UserDTO, unknown, UpdateUserDTO> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input) => userUseCase.executeEdit(id, input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.detail(id) });
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

export const useDeleteUser = (): UseMutationResult<void, unknown, string> => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (userId) => userUseCase.executeDelete(userId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};