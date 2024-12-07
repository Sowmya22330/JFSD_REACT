import React, { useState } from 'react';
import axios from 'axios';
import './AddProduct.css';

function AddProduct() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:8080/api/products', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.status === 201) {
                alert('Product added successfully');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    };

    return (
        <div className="add-product-container">
            <h2>Add Product</h2>
            <form onSubmit={handleProductSubmit} className="add-product-form">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
