import React from 'react';
import "./Card.css";

const card = () => {
  return (
    <div className='container'>
        <div className='left'>
        <h1>All-in-one</h1>
        <h1>travel app</h1>

        </div>
        <div className='right'>
              <div className='file'>
                   <div className='i1'>
                   <img src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png" alt="" />
                   </div>
                   <div className='i2'>
                   <img src="https://png.pngtree.com/png-vector/20230803/ourmid/pngtree-dj-headphone-vector-png-image_6873925.png" alt="" />
                   </div>
                   <div className='i3'>
                   <img src="https://pngfre.com/wp-content/uploads/Burger-43.png" alt="" />
                   </div>
              </div>

        </div>
    </div>
    
  )
}

export default card
