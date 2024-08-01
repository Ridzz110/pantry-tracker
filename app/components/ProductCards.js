import React from 'react';

export default function ProductCards(props) {
  const { title, quantity, price, exp, image, deleteProduct, productId, showProductInfo } = props;

  return (
    <div onClick={() => showProductInfo(productId)} className="cursor-pointer">
      <div className="flex flex-wrap justify-center my-10 text-white font-mono ">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 w-64 bg-zinc-900">
          <div className="relative w-full h-64">
            <img 
              src={image} 
              className="absolute inset-0 object-cover w-full h-full"
              alt={title} 
            />
          </div>
          <div className="px-6 py-4">
            <div className="tracking-wide font-bold text-xl mb-2 font-mono text-white py-2">{title}</div>
            <div className='bg-zinc-950 px-4 py-2 my-2 rounded-lg hover:bg-zinc-700 shadow-lg'>quantity: {quantity}</div>
            <div className='bg-zinc-950 px-4 py-2 my-2 rounded-lg hover:bg-zinc-700 shadow-lg'>EXP: {exp}</div>
            <div className='my-2 flex flex-row justify-between'>
              
              <button 
                className="px-4 py-2 bg-red-700 rounded-lg text-white font-mono shadow-2xl hover:drop-shadow-2xl"
                onClick={(e) => { e.stopPropagation(); deleteProduct(productId); }} // Call deleteProduct with productId
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white">
                  <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
