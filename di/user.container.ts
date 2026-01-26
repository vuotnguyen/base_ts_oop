
import { CustomerUseCase } from "@/application/useCase/CustomerUseCase";
import { ProductUseCase } from "@/application/useCase/ProductUseCase";
import { UserUseCase } from "@/application/useCase/UserUseCase";
import { CustomerApiRepository } from "@/infrastructure/api/CustomerApiRepository";
import { ProductApiRepository } from "@/infrastructure/api/ProductApiRepository";
import { UserApiRepository } from "@/infrastructure/api/UserApiRepository";

const userRepository = new UserApiRepository();
const customerRepository = new CustomerApiRepository()
const productRepository = new ProductApiRepository()

export const userUseCase = new UserUseCase(userRepository);
export const customerUseCase = new CustomerUseCase(customerRepository);
export const productUseCase = new ProductUseCase(productRepository);