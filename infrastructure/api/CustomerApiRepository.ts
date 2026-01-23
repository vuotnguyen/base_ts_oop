import { ICustomerRepository } from "@/application/interface/ICustomerRepository";
import { apiConfig } from "./apiConfig";

class CustomerApiRepository implements ICustomerRepository {
    async createCustomer(customerData: any): Promise<any> {
        // Implementation to create a customer via API
        const res = await apiConfig.post('/api/customers', customerData);
        return res.data
    }
    async editCustomer(id: string, customerData: any): Promise<any> {
        // Implementation to edit a customer via API
        const res = await apiConfig.put(`/api/customers/${id}`, customerData);
        return res.data
    }

} 