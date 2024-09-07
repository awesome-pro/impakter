"use client";

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import CountrySelect from './country-select';
import AllIndustrySelect from './all-industies-select';
import RatingSelect from './rating-select';
import CountryCombo from './country-select-2';


function SearchBar() {
  return (
    <div className='flex items-center justify-between gap-0 z-30 hover:z-50 shadow-lg bg-white/90 shadow-primary/50 hover:shadow-primary/70  rounded-sm'>
      <Input
        type='text'
        placeholder='Search for companies...'
        className='rounded-r-none w-1/2 h-[50px] text-lg search'
      />
     <CountrySelect />
     <AllIndustrySelect />
     <RatingSelect />
      <Button size='lg' className=' border-none rounded-l-none h-[50px] text-white font-black text-xl '>
        Search
      </Button>
    </div>
  )
}

export default SearchBar