import { IProductRepository } from "@/application/interface/IProductRepository";

class ProductApiRepository implements IProductRepository {
    async createProduct(): Promise<any[]> {
        // Implementation to fetch products from API
        throw new Error("Method not implemented.");
    }
    async editProduct(id: string, productData: any): Promise<any> {
        // Implementation to edit a product via API
        throw new Error("Method not implemented.");
    }

}