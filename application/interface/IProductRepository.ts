interface IProductRepository {
    createProduct(productData: any): Promise<any>;
    editProduct(id: string, productData: any): Promise<any>;
    // Define methods for product repository
}

export { IProductRepository };
