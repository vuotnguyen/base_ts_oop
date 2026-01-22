export type Location = {
    latitude: number;
    longitude: number;
}

export type ProductDTO = {
    id: string;
    name: string;
    acreage: number;
    length: number;
    wide: number;
    price: number;
    address: string;
    detail: string;
    type: PRODUCT_TYPE;
    numberOfSends: number;
    location: Location;
    images: string[];
    videos: string[];
    state: PRODUCT_STATE;
    user: UserDTO;
    owner: OwnerDTO;
};
export type CreateProductDTO = Partial<Omit<ProductDTO, 'id' | 'numberOfSends'>>;
export type UpdateProductDTO = Partial<Omit<CreateProductDTO, 'id' | 'user' | 'location' | 'owner'>>;