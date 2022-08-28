import React from 'react'
import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

export const useSearch = () => {
  const {search, setSearch} = useContext(SearchContext)
  return [search, setSearch]
}
