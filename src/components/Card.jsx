import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  const imagePath = result.backdrop_path || result.poster_path;
  const altText = result.title || result.name || "No title";

  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 h-[400px]'>
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-full h-[60%] overflow-hidden">
          {imagePath ? (
            <Image
              src={`https://image.tmdb.org/t/p/original/${imagePath}`}
              alt={altText}
              layout="fill"
              objectFit="cover"
              className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration:300'
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-300 h-full">
              <p className='text-black'>No Image Available</p>
            </div>
          )}
        </div>
      </Link>
      <div className='p-2 h-[40%]'>
        <p className='line-clamp-2 text-md'>{result.overview}</p>
        <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
        <p className='flex items-center'>
          {result.release_date || result.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3' />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
