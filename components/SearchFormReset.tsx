'use client'

import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

function SearchFormReset() {
  const router = useRouter()

    function reset() {
        router.push('/')
      
        const input = document.querySelector('input[name=query]') as HTMLInputElement
        if (input) input.value = '';
    }

  return (
    <>
      <button
        type='button'
        onClick={reset}
        className='search-btn text-white'
      >
        X
      </button>
    </>
  )
}

export default SearchFormReset