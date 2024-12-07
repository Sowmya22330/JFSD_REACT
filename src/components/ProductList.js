import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <h3>{product.productName}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <img src={`http://localhost:8080/${product.imagePath}`} alt={product.productName} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
