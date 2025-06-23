
import React from 'react'
import Navbar from '../componant/Navbar'
const Add = () => {

const [restaurant , setRestaurant] =useState({
    tite:"",
    type:"",
    img:"",
  });
  const handleChange = (e) =>{
const {name , value} = e.target;
setRestaurant({...restaurant , [name]:value});
  };

  conshandleSummit= async()=>{
    try {
        const response = await fetch("http://localhost:3000/restaurants",{
          ,method:"POST",
          body:JSON.stringify(response)
        });
        if (response.ok) {
          alert("Restaurant added successfully!!");
          setRestaurant({
            title:"",
            type:"",
            img:"",
          });
        }
    } catch (error) {
      console.log(error)
    }
  };
  return <div className="container mx=auto">
    <Navbar/>

  </div>;
}

export default Add