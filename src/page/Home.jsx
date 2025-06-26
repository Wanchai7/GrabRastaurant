import React, { useEffect, useState } from 'react'
import Restaurants from '../component/Restaurant'

const Home = () => {

  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {

    // call api: GetAllRestaurants
    fetch('http://localhost:5000/restaurants')
    .then((res) => {
      // convert to json format
      return res.json()
    })
    .then((resp) => {
      // save to state
      setRestaurants(resp)
      setFilteredRestaurant(resp)
    })
    .catch((e) => {
      // catch error
      console.log(e.message)
    })

  }, [])

  const handleSearch = (keyword) => {
    if (keyword === '') {
      setFilteredRestaurant(restaurants)
      return;
    }

    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
        restaurant.type.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      )
    })
    setFilteredRestaurant(result)
    // console.log(result)
  }

  return (
    <div className='container mx-auto'>
      {/* Navigation */}
      {/* Header */}
      <div>
        <h1 className='justify-center text-3xl text-center m-5 p-5'>Grab Restaurant</h1>
      </div>
      {/* Search Box */}
      <div className='mb-5 flex justify-center items-center'>
        <label className="input flex items-center gap-2 w-2xl">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" name='keyword' onChange={(e) => handleSearch(e.target.value)} />
        </label>
      </div>
      {/* Result */}
      <Restaurants restaurants={filteredRestaurant} />
    </div>
  )
}

export default Home