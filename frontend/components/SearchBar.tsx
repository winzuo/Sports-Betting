"use client";
import Image from 'next/image';
import { SearchParlayType } from '.';
import React, { useState } from 'react';

const SearchButton = ( {otherClasses} : {otherClasses : string} ) => (
    <button type = "submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
            src = "/magnifying-glass.svg"
            alt = "magnifying glass"
            width={40}
            height = {40}
            className = "object-contain"
        />
    </button>
)

const SearchBar = () => {
  const [parlayType, setParlayType] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (parlayType.trim() === "") {
      return alert("Please provide some valid input");
    }
  }

  return (
    <form className='searchbar' onSubmit = {handleSearch}>
        <div className='searchbar_item'>
            <SearchParlayType 
                parlayType = {parlayType}
                setParlayType = {setParlayType}
            />
            <SearchButton otherClasses='sm:hidden' />
        </div>
        <SearchButton otherClasses='max-sm:hidden' />
    </form>
  )
}

export default SearchBar