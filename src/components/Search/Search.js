import React from 'react'

import Input from '@material-ui/core/Input'
import SearchIcon from '@material-ui/icons/Search'

import './Search.css'

export const Search = () => {
  return (
    <div className="search">
      <SearchIcon />
      <Input placeholder="Type to search..." />
    </div>
  )
}
