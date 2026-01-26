import { PRODUCT_STATE } from "@/domain/enum";
import { ProductDTO, UpdateProductDTO } from "../dto/product";
import { IProductRepository } from "../interface/IProductRepository";

export class ProductUseCase{
    constructor(private readonly productRepository: IProductRepository) {}
    async executeCreateProduct(productData: ProductDTO){
        this.productRepository.createProduct(productData)
    }
    async executeEditProduct(id: string, product: UpdateProductDTO){
        return this.productRepository.editProduct(id, product)
    }
    async executeGetAllProduct(){
        return this.productRepository.getAllProduct()
    }
    async executeProductById(id:string){
        return this.productRepository.getProductById(id)
    }
    async executeUpdateStatus(id: string, status: PRODUCT_STATE){
        return this.productRepository.changeStatusProduct(id, status)
    }
}