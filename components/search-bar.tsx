"use client";

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import CountrySelect from './country-select';
import AllIndustrySelect from './all-industies-select';
import RatingSelect from './rating-select';


function SearchBar() {
  return (
    <div className='flex items-center justify-between gap-0'>
      <Input
        type='text'
        placeholder='Search for companies...'
        className='rounded-r-none w-1/2'
      />
     <CountrySelect />
     <AllIndustrySelect />
     <RatingSelect />
      <Button size='lg' className=' border-none'>
        Search
      </Button>
    </div>
  )
}

export default SearchBar