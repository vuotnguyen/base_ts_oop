interface ICustomerRepository {
    createCustomer(customerData: any): Promise<any>;
    editCustomer(id: string, customerData: any): Promise<any>;
    // deleteCustomer(id: string): Promise<void>;
    // getCustomerById(id: string): Promise<any>;
    // getAllCustomers(): Promise<any[]>;
    // Define methods for product repository
}

export { ICustomerRepository };
