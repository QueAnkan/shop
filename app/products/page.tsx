"use client";

import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../utils/fetchProducts";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { Product } from "../utils/fetchProducts";

const ProductsPage = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Product[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await getCategories({
                category: "",
            });
            setCategories(categoriesData);
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const openCategory = (category: string) => {
        console.log("open category");
        const productList = products.filter(
            (product) => product.category === category
        );
        setSelectedCategory(productList);

        console.log(productList);
    };

    return (
        <div className='min-h-svh pt-44 bg-white '>
            <div className='flex flex-col items-center justify-center gap-y-16 max-w-screen-2xl mx-auto pt-36'>
                {/*  <h2>Categories</h2> */}
                <ul className='flex flex-wrap gap-8'>
                    {categories.map((category: string) => (
                        <li
                            key={category}
                            className='border w-72 py-8 bg-blue-800 text-white'
                        >
                            <Button
                                onPress={() => openCategory(category)}
                                className='text-center size-full'
                            >
                                <h3>{category}</h3>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div className='w-full'>
                    <ul className='flex flex-wrap gap-10 justify-center p-8 mx-auto'>
                        {selectedCategory.map((product: Product) => (
                            <li
                                key={product.id}
                                className='border rounded-md max-w-80'
                            >
                                <Card>
                                    <CardBody className='p-8 gap-4 flex flex-col'>
                                        <h3>{product.title}</h3>
                                        <Image
                                        className=""
                                            isZoomed
                                            height={100}
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <p>{product.description}</p>

                                        <p>Price: {product.price}:-</p>
                                    </CardBody>
                                </Card>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
