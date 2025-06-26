import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'


const Update = () => {

    // 1. Get from url
    const { id } = useParams()

   

    const [restaurant, setRestaurant] = useState({
        title: '',
        type: '',
        img: ''
    });

     //  2. Get Restaurant by ID
     useEffect(() => {
        fetch(`http://localhost:5000/restaurants/${id}`)
            .then((res) => {
                //  convert text to json format
                return res.json();
            })
            .then((resp) => {
                // save to state
                setRestaurant(resp)
            })
            .catch((e) => {
                // catch error
                console.log(e.message)
            })


    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setRestaurant({ ...restaurant, [name]: value }) // {...restaurant clone ของเดิม
    }

    const handleSubmit = async () => {
        try {
            // async await 
            const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
                method: "PUT",
                body: JSON.stringify(restaurant)
            })

            if (response.ok) {
                alert("Restaurant Updated successfully!")
                setRestaurant({
                    title: '',
                    type: '',
                    img: ''
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
       <>
  <div className="flex justify-center items-center mt-10 px-4">
    <form className="w-full max-w-md bg-pink-50 border border-pink-200 rounded-3xl p-8 shadow-xl space-y-6">
      <h2 className="text-3xl font-bold text-purple-600 text-center">🔄 Update Restaurant</h2>

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
      <div className="flex items-center bg-white border border-purple-300 rounded-full px-4 py-2 shadow-inner">
        <span className="text-purple-400 mr-2">🍽️</span>
        <input
          value={restaurant.type}
          onChange={handleChange}
          name="type"
          type="text"
          placeholder="Type of Cuisine"
          className="w-full outline-none text-purple-600 placeholder:text-purple-300 bg-transparent"
        />
      </div>

      {/* Image */}
      <div className="flex items-center bg-white border border-yellow-300 rounded-full px-4 py-2 shadow-inner">
        <span className="text-yellow-400 mr-2">🖼️</span>
        <input
          value={restaurant.img}
          onChange={handleChange}
          name="img"
          type="text"
          placeholder="Image URL"
          className="w-full outline-none text-yellow-600 placeholder:text-yellow-300 bg-transparent"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between space-x-4">
        <button
          type="button"
          className="flex-1 bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 rounded-full transition-all duration-200 shadow-md"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-full transition-all duration-200 shadow-md"
        >
          Update
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
</>

    )
}

export default Update