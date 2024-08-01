import React from 'react';
import Link from 'next/link';

export default function Cards(props) {
  const { title, image } = props;

  return (
    <div className="flex flex-wrap justify-center my-10">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 w-64 bg-zinc-900">
        <div className="relative w-full h-64">
          <img 
            src={image} 
            className="absolute inset-0 object-cover w-full h-full"
            alt={title} 
          />
        </div>
        <div className="px-6 py-4 flex flex-col justify-between h-32">
          <div className="flex-grow">
            <div className="font-bold text-xl mb-2 font-mono text-white">{title}</div>
          </div>
          <div>
            <Link href={`/category/${encodeURIComponent(title)}`}>
              <button className="px-4 py-2 bg-zinc-950 rounded-lg text-white font-mono shadow-2xl hover:drop-shadow-2xl">
                View Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
