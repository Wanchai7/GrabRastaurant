import React from 'react'

const Card = ({ id, title, type, img }) => {

  const deleted = async (id) => {
    try {
      // async await 
      const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        alert("Restaurant Deleted successfully!")
        window.location.reload();
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={img}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <div onClick={() => deleted(id)} className="badge badge-outline">Delete</div>
          <a href={`/update/${id}`} className="badge badge-outline cursor-pointer">Edit</a>
        </div>
      </div>
    </div>
  )
}

export default Card