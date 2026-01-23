import { CustomerDTO, UpdateCustomerDTO } from "../dto/customer";
import { ICustomerRepository } from "../interface/ICustomerRepository";

export class EditCustomerUseCase {
    constructor(private readonly customerRepository: ICustomerRepository) {}

  async execute(id: string, customerData: UpdateCustomerDTO): Promise<CustomerDTO> {
    return this.customerRepository.editCustomer(id, customerData);
  }

}