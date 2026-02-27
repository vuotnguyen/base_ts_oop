import { ProductDTO } from "@/application/dto/product";
import { IProductRepository } from "@/application/interface/IProductRepository";
import { PRODUCT_STATE } from "@/domain/enum";
import { apiConfig } from "./apiConfig";

export class ProductApiRepository implements IProductRepository {
    getAllProduct(): Promise<ProductDTO[]> {
        throw new Error("Method not implemented.");
    }
    getProductById(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    changeStatusProduct(id: string, status: PRODUCT_STATE): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async createProduct(): Promise<any[]> {
        // Implementation to fetch products from API
        const res = await apiConfig.get('/api/products');
        return res.data;
    }
    async editProduct(id: string, productData: any): Promise<any> {
        // Implementation to edit a product via API
        const res = await apiConfig.put(`/api/products/${id}`, productData);
        return res.data;
    }

}