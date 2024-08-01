import React, { useState } from 'react';

export default function NewProductModal  ({ isOpen, onClose, addProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    quantity: '',
    price: '',
    expirationDate: '',
    image: '',
    categoryId: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    addProduct(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 text-white bg-black overflow-y-auto bg-opacity-50 py-10 flex flex-wrap items-center justify-center">
      <div className=" bg-zinc-800 p-6 rounded-lg shadow-lg w-1/2 py-10">
        <h2 className="text-lg font-bold">Add New Product</h2>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Expiration Date</label>
          <input
            type="date"
            name="expirationDate"
            value={newProduct.expirationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold ">Image URL</label>
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Category ID</label>
          <input
            type="text"
            name="categoryId"
            value={newProduct.categoryId}
            onChange={handleChange}
            className="w-full p-2 border rounded border-none bg-zinc-900"
          />
        </div>
        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2  text-white rounded bg-zinc-950"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button
            className="px-4 py-2  rounded bg-zinc-950"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
