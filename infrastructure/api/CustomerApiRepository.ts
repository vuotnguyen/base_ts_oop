import { ICustomerRepository } from "@/application/interface/ICustomerRepository";

class CustomerApiRepository implements ICustomerRepository {
    async createCustomer(customerData: any): Promise<any> {
        // Implementation to create a customer via API
        throw new Error("Method not implemented.");
    }
    async editCustomer(id: string, customerData: any): Promise<any> {
        // Implementation to edit a customer via API
        throw new Error("Method not implemented.");
    }

}