// Type: TypeScript file

type type = {
    category: string;
};

async function getCategories(params: type) {
    console.log("fetching products");
    const response = await fetch(
        "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    console.log(data);
    return data;
}

export { getCategories };

type Product = {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: {
        rate: number;
        count: number;
    };
};

async function getProducts(): Promise<Product[]> {
    console.log("fetching products");
    const response = await fetch("https://fakestoreapi.com/products");
    const productdata: Product[] = await response.json();
    console.log(productdata);
    return productdata;
}

export { getProducts };    export type { Product };

