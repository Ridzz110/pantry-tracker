"use client"; // Ensure this is at the top if using client-side features

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams for dynamic routes
import ProductCards from '../../components/ProductCards';
import ConfirmationModal from '../../confirmationModal'; // Import the modal
import ProductInfoModal from '../../productInfoModal'; // Import the info modal
import NewProductModal from '../../newProductModal'; // Import the new product modal
import { collection, getDocs, query, where, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
import Link from 'next/link';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { name: categoryName } = useParams();

  const fetchProducts = async () => {
    try {
      if (categoryName) {
        const q = query(collection(db, "products"), where("categoryId", "==", categoryName));
        const querySnapshot = await getDocs(q);
        const productsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      }
    } catch (e) {
      console.error("Error fetching documents: ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  const deleteProduct = async (productId) => {
    setProductIdToDelete(productId);
    setIsConfirmationModalOpen(true); // Open the confirmation modal
  };

  const confirmDelete = async () => {
    if (productIdToDelete) {
      try {
        const productRef = doc(db, "products", productIdToDelete);
        await deleteDoc(productRef);
        setProducts(products.filter(product => product.id !== productIdToDelete)); // Remove the deleted product from state
        setProductIdToDelete(null);
      } catch (error) {
        console.error("Error deleting product: ", error);
      }
      setIsConfirmationModalOpen(false); // Close the modal after deletion
    }
  };

  const showProductInfo = (productId) => {
    const product = products.find(product => product.id === productId);
    setSelectedProduct(product);
    setIsInfoModalOpen(true); // Open the product info modal
  };

  const updateProduct = async (updatedProduct) => {
    try {
      const productRef = doc(db, "products", updatedProduct.id);
      await updateDoc(productRef, updatedProduct);
      setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
    } catch (error) {
      console.error("Error updating product: ", error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const docRef = await addDoc(collection(db, "products"), newProduct);
      setProducts([...products, { ...newProduct, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-24 bg-zinc-800">
      <div className="my-4 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="text-white font-bold text-4xl mx-24">Category: {categoryName || "Loading..."}</p>
      </div>
      <div className='w-4/5 max-w-screen-lg flex flex-row justify-between items-center'>
      <button
        className="mb-4 px-4 py-2 bg-zinc-900 mt-2 self-start text-white rounded"
        onClick={() => setIsNewProductModalOpen(true)}
      >
        Add New Product
      </button>
      <Link href='/'>
      <button className='self-end px-4 rounded-lg py-2 bg-zinc-950'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></button>
      </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCards 
              key={product.id}
              title={product.name}
              image={product.image}
              quantity={product.quantity}
              price={`${product.price}$`}
              exp={product.expirationDate}
              deleteProduct={deleteProduct} // Pass deleteProduct function
              productId={product.id} // Pass productId
              showProductInfo={showProductInfo} // Pass showProductInfo function
            />
          ))
        ) : (
          <p className="text-white">No products available.</p>
        )}
      </div>

      <ConfirmationModal 
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={confirmDelete}
      />
      {selectedProduct && (
        <ProductInfoModal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          product={selectedProduct}
          updateProduct={updateProduct}
        />
      )}
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onClose={() => setIsNewProductModalOpen(false)}
        addProduct={addProduct}
      />
    </div>
  );
}
