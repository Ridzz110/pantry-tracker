import React, { useState } from 'react';

export default function ConfirmationModal ({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold text-white">Confirm Deletion</h2>
        <p className='text-white mt-2'>Are you sure you want to delete this product?</p>
        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2 bg-red-600 text-white rounded"
            onClick={onConfirm}
          >
            Yes, Delete
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

