import React, { useEffect, useState } from 'react'
import Restaurants from '../component/Restaurant'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/restaurants')
      .then((res) => res.json())
      .then((resp) => {
        setRestaurants(resp)
        setFilteredRestaurant(resp)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  const handleSearch = (keyword) => {
    if (keyword === '') {
      setFilteredRestaurant(restaurants)
      return
    }

    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
        restaurant.type.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      )
    })
    setFilteredRestaurant(result)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center py-10 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')`,
        backgroundAttachment: 'fixed',
        backgroundColor: 'rgba(255,255,255,0.9)',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Header */}
      <h1 className="text-center text-5xl font-bold text-white drop-shadow-lg mb-10">
        🍔 Grab Restaurant
      </h1>

      {/* Search Box */}
      <div className="mb-10 flex justify-center">
        <label className="flex items-center bg-white rounded-full shadow-lg px-5 py-2 w-full max-w-lg">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search restaurants or type..."
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            className="ml-3 w-full outline-none text-gray-700"
          />
        </label>
      </div>

      {/* Restaurant List */}
      <div className="bg-white/90 rounded-xl shadow-xl p-5 max-w-6xl mx-auto">
        <Restaurants restaurants={filteredRestaurant} />
      </div>
    </div>
  )
}

export default Home
