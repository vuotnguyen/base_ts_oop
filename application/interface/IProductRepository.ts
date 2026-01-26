import { PRODUCT_STATE } from "@/domain/enum";
import { ProductDTO } from "../dto/product";

interface IProductRepository {
    createProduct(productData: any): Promise<any>;
    editProduct(id: string, productData: any): Promise<any>;
    getAllProduct(): Promise<ProductDTO[]>
    getProductById(id: string): Promise<any>
    changeStatusProduct(id: string, status: PRODUCT_STATE): Promise<any>
    // Define methods for product repository
}

export { IProductRepository };
