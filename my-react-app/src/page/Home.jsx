import React from 'react'
import Navbar from '../componant/Navbar'
import Restaurant from '../componant/Restaurant';
const Home = () => {
  return (
    <div className="container mx-auto">
      
      <Navbar />
      {/* Navbar */}
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-5">
          GrabRestaurant
        </h1>
      </div>

      {/* Search */}
      <div className="mb-5 flex justify-center items-center ">
        <label className="input flex items-center gap-2 w-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
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
          <input type="search" required placeholder="Search" />
        </label>  
      </div>

      {/* Card */}
      <Restaurant/>
    </div>
  );
}

export default Home