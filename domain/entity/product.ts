class Product {
    private idProduct: number;
    private name: string;
    private address?: string;
    private notes?: string;
    private nameOwner?: string;
    private phone?: string;
    private type?: string;
    private width?: number;
    private height?: number;
    private acreage?: number;
    private price: number;
    private lat?: number;
    private lng?: number;
    constructor(
        //create idProduct, name, address, notes, nameOwner, phone, type, width, height, acreage, price, lat lng
        idProduct: number,
        name: string,
        price: number,
        address?: string,
        notes?: string,
        nameOwner?: string,
        phone?: string,
        type?: string,
        width?: number,
        height?: number,
        acreage?: number,
        lat?: number,
        lng?: number
    ) {
        this.idProduct = idProduct;
        this.name = name;
        this.address = address;
        this.notes = notes;
        this.nameOwner = nameOwner;
        this.phone = phone;
        this.type = type;
        this.width = width;
        this.height = height;
        this.acreage = acreage;
        this.price = price;
        this.lat = lat;
        this.lng = lng;
    }
    private getInfoProduct(): string {
        return `Id Product: ${this.idProduct} - Name: ${this.name} - Address: ${this.address} - Notes: ${this.notes} - Name Owner: ${this.nameOwner} - Phone: ${this.phone} - Type: ${this.type} - Width: ${this.width} - Height: ${this.height} - Acreage: ${this.acreage} - Price: ${this.price} - Lat: ${this.lat} - Lng: ${this.lng}`;
    }
    
}