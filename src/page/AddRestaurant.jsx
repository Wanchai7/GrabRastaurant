import React, { useState } from 'react'

const AddRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    title: '',
    type: '',
    img: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setRestaurant({ ...restaurant, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/restaurants', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(restaurant)
      })

      if (response.ok) {
        alert("Restaurant added successfully!")
        setRestaurant({ title: '', type: '', img: '' })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4 flex justify-center items-start"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')`,
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255, 230, 235, 0.85)'
      }}
    >
      <form className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-pink-200 rounded-3xl p-8 shadow-2xl space-y-6">
        <h2 className="text-3xl font-bold text-pink-600 text-center">🍰 Add Restaurant</h2>

        {/* Title */}
        <div className="flex items-center bg-white border border-pink-300 rounded-full px-4 py-2 shadow-inner">
          <span className="text-pink-400 mr-2">📛</span>
          <input
            value={restaurant.title}
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Restaurant Title"
            className="w-full outline-none text-pink-600 placeholder:text-pink-300 bg-transparent"
          />
        </div>

        {/* Type */}
        <div className="flex items-center bg-white border border-pink-300 rounded-full px-4 py-2 shadow-inner">
          <span className="text-pink-400 mr-2">🍽️</span>
          <input
            value={restaurant.type}
            onChange={handleChange}
            name="type"
            type="text"
            placeholder="Type of Cuisine"
            className="w-full outline-none text-pink-600 placeholder:text-pink-300 bg-transparent"
          />
        </div>

        {/* Image URL */}
        <div className="flex items-center bg-white border border-pink-300 rounded-full px-4 py-2 shadow-inner">
          <span className="text-pink-400 mr-2">🖼️</span>
          <input
            value={restaurant.img}
            onChange={handleChange}
            name="img"
            type="text"
            placeholder="Image URL"
            className="w-full outline-none text-pink-600 placeholder:text-pink-300 bg-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between space-x-4">
          <button
            type="button"
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-full transition-all duration-200 shadow-md"
            onClick={() => setRestaurant({ title: '', type: '', img: '' })}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-full transition-all duration-200 shadow-md"
          >
            Add
          </button>
        </div>

        {/* Image Preview */}
        {restaurant.img && (
          <div className="pt-4">
            <img
              src={restaurant.img}
              alt="Preview"
              className="w-full h-60 object-cover rounded-xl shadow-lg"
            />
          </div>
        )}
      </form>
    </div>
  )
}

export default AddRestaurant
