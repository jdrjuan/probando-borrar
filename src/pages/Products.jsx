import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Form from "../components/Form";
import Table from "../components/Table";
import { productList } from "../constants/productList";

const Products = () => {
    
    const [products, setProducts] = useState(productList);
    // console.log(products);

    const [productToUpdate, setProductToUpdate] = useState(null);

    // CRUD -> C:CREATE -> POST
    const createProduct = newProduct => {
        // newProduct.id = Date.now();
        // https://www.npmjs.com/package/uuid
        newProduct.id = uuidv4();
        console.log(`➕:`, newProduct);
        setProducts([...products, newProduct]);
    };

    // CRUD -> U:UPDATE -> PUT
    const updateProduct = updatedProduct => {

    };

    // CRUD -> D:DELETE -> DELETE
    const deleteProduct = id => {
        console.log(`❌: ${id}`);
        const newProductsArray = products.filter(product => product.id !== id);
        setProducts(newProductsArray)
    };

    return (
        <>
            <h1 className="display-3">Productos</h1>
            
            <Form
                createProduct={createProduct}
                productToUpdate={productToUpdate}
            />

            <Table
                products={products}
                deleteProduct={deleteProduct}
                setProductToUpdate={setProductToUpdate}
            />

        </>
    );
};

export default Products;
