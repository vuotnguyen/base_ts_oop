import { IProductRepository } from "@/application/interface/IProductRepository";
import { apiConfig } from "./apiConfig";

class ProductApiRepository implements IProductRepository {
    async createProduct(): Promise<any[]> {
        // Implementation to fetch products from API
        const res = await apiConfig.get('/api/products');
        return res.data
    }
    async editProduct(id: string, productData: any): Promise<any> {
        // Implementation to edit a product via API
        const res = await apiConfig.put(`/api/products/${id}`, productData);
        return res.data
    }

}