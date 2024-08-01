import React, { useState } from 'react';

export default function ProductInfoModal ({ isOpen, onClose, product, updateProduct }) {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    updateProduct(updatedProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-1/2 text-white">
        <h2 className="text-lg font-bold">Product Information</h2>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            name="name"
            value={updatedProduct.name}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-zinc-700 border-none"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-zinc-700 border-none"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Price</label>
          <input
            type="text"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-zinc-700 border-none"
          />
        </div>
        <div className="my-4">
          <label className="block mb-2 font-semibold">Expiration Date</label>
          <input
            type="date"
            name="expirationDate"
            value={updatedProduct.expirationDate}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-zinc-700 border-none"
          />
        </div>
        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-zinc-950 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

