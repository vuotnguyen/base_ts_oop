import { TYPE_CUSTOMER } from "@/domain/enum";
import { CustomerDTO } from "../dto/customer";

interface ICustomerRepository {
    createCustomer(customerData: CustomerDTO): Promise<any>;
    editCustomer(id: string, customerData: any): Promise<any>;
    changeStateCustomer(id: string, state: TYPE_CUSTOMER): Promise<any>
    getCustomerById(id: string): Promise<any>;
    getAllCustomers(): Promise<CustomerDTO[]>;
    // Define methods for product repository
}

export { ICustomerRepository };
