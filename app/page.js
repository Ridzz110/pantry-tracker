"use client";
import React, { useEffect, useState } from 'react';
import Cards from './components/Cards';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Adjust the path if necessary

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'category'));
        const categoriesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCategories(categoriesList);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 bg-zinc-800">
      <div className="my-4 z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="text-white font-bold text-4xl mx-24">Pantry Tracker</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {categories.map(category => (
          <Cards key={category.id} title={category.name} image={category.image} />
        ))}
      </div>
    </main>
  );
}

