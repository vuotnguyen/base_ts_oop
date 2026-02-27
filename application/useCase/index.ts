import { CustomerUseCase } from "@/application/useCase/CustomerUseCase";
import { ProductUseCase } from "@/application/useCase/ProductUseCase";
import { UserUseCase } from "@/application/useCase/UserUseCase";
import { AuthenApiRepository } from "@/infrastructure/api/AuthenApiRepository";
import { CustomerApiRepository } from "@/infrastructure/api/CustomerApiRepository";
import { ProductApiRepository } from "@/infrastructure/api/ProductApiRepository";
import { UserApiRepository } from "@/infrastructure/api/UserApiRepository";
import { AuthenUseCase } from "./AuthenUseCase";

const userRepository = new UserApiRepository();
const customerRepository = new CustomerApiRepository()
const productRepository = new ProductApiRepository()
const authenRepository = new AuthenApiRepository();

export const userUseCase = new UserUseCase(userRepository);
export const customerUseCase = new CustomerUseCase(customerRepository);
export const productUseCase = new ProductUseCase(productRepository);
export const authenUseCase = new AuthenUseCase(authenRepository);