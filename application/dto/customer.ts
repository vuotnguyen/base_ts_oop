export type CustomerDTO = {
    id: string;
    detail: string;
    name: string; 
    phone: string;
    finance: string;
    address: string;
    demand: string;
    rankCustomer: RANK_CUSTOMER;
    typeCustomer: TYPE_CUSTOMER;
    user: UserDTO;
}
export type CreateCustomerDTO = Partial<Omit<CustomerDTO, 'id' >>;
export type UpdateCustomerDTO = Partial<Omit<CreateCustomerDTO, 'id' | 'user' >>