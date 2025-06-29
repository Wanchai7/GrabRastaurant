import React from 'react'

const Navbar = () => {
  const menuItems = [
    { name: "Search", url: "/" },
    { name: "Add restaurant", url: "/add" },
    { name: "About us", url: "/" },
  ]

  return (
    <div
      className="navbar text-white shadow-lg"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1546069901-eacef0df6022')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item, i) => (
              <li key={i}><a href={item.url}>{item.name}</a></li>
            ))}
          </ul>
        </div>
        <a href='/' className="btn btn-ghost text-xl text-white">
          🍽️ Grabrestaurant By Wanchai
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, idx) => (
            <li key={idx}><a className="text-white hover:text-yellow-300" href={item.url}>{item.name}</a></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <button className="btn btn-sm bg-yellow-400 hover:bg-yellow-500 text-black border-none">Register</button>
        <button className="btn btn-sm bg-white hover:bg-gray-200 text-black border-none">Login</button>
      </div>
    </div>
  )
}

export default Navbar
