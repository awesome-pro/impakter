import React from 'react'
import CountryCombo from './country-select-2'
import SearchBar from './search-bar'

function FindESGbyCountry() {
  return (
    <div className='w-screen bg-primary/10 min-h-[200px] flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-bold mb-8'>
        Find ESG Scores by Country, Industry, or Rating
      </h1>
      <SearchBar />
    </div>
  )
}

export default FindESGbyCountry