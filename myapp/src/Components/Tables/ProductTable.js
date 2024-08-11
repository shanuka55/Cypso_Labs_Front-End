import React, { useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({ id: "", name: "", price: "", stock: "" });
  };

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Product</h3>
      <div>
        <label>ID: </label>
        <input
          type="text"
          name="id"
          value={newProduct.id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Stock: </label>
        <input
          type="text"
          name="stock"
          value={newProduct.stock}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductTable;
