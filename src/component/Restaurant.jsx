import React from 'react'
import Card from './Card'

const Restaurant = ({ restaurants }) => {
    return (
        <div className='flex'>
            <div className='flex flex-wrap justify-center gap-4'>
                {
                    restaurants && restaurants.map((restaurant) => {
                        return (
                            <Card key={restaurant.id} id={restaurant.id} title={restaurant.title} type={restaurant.type} img={restaurant.img} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Restaurant