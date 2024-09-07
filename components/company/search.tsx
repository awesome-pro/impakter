import React from 'react'
import SearchBar from '../search-bar'
import { Button } from '../ui/button'

function CompanySearch() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-semibold mt-12'>
            Search and Compare ESG Score of Your Favorite Brands
        </h1>
        <SearchBar />
        <h5 className='font-semibold mt-10'>
            Don’t see the company you’re looking for? Ask for it to be listed.
        </h5>
        <Button size='lg' className='mb-20 text-white'>
            Request a Company
        </Button>
    </div>
  )
}

export default CompanySearch