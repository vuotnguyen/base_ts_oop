import { CustomerDTO } from "@/application/dto/customer";
import { ICustomerRepository } from "@/application/interface/ICustomerRepository";
import { TYPE_CUSTOMER } from "@/domain/enum";
import { apiConfig } from "./apiConfig";

export class CustomerApiRepository implements ICustomerRepository {
    changeStateCustomer(id: string, state: TYPE_CUSTOMER): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getCustomerById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getAllCustomers(): Promise<CustomerDTO[]> {
        throw new Error("Method not implemented.");
    }
    async createCustomer(customerData: any): Promise<any> {
        // Implementation to create a customer via API
        const res = await apiConfig.post('/api/customers', customerData);
        return res.data;
    }
    async editCustomer(id: string, customerData: any): Promise<any> {
        // Implementation to edit a customer via API
        const res = await apiConfig.put(`/api/customers/${id}`, customerData);
        return res.data;
    }

} 