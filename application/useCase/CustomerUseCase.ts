import { TYPE_CUSTOMER } from "@/domain/enum";
import { CustomerDTO, UpdateCustomerDTO } from "../dto/customer";
import { ICustomerRepository } from "../interface/ICustomerRepository";

export class CustomerUseCase {
    constructor(private readonly customerRepository: ICustomerRepository) {}
    async executeCreate(customerData: CustomerDTO) {
       return this.customerRepository.createCustomer(customerData)
    }
    async executeEdit(id: string, updateCustomer: UpdateCustomerDTO){
        return this.customerRepository.editCustomer(id, updateCustomer)
    }
    async executeChange (id: string, stateChange: TYPE_CUSTOMER){
        return this.customerRepository.changeStateCustomer(id, stateChange)
    }
    async executeAllCustomer() {
        return this.customerRepository.getAllCustomers()
    }
    async executeCustomerById(id: string){
        return this.customerRepository.getCustomerById(id)
    }
}