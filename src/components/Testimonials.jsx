import React from 'react';

// Import the image from the assets folder
import pink from '../assets/pink.png';



const Testimonials = () => {
    return (
        <div
        className="w-full h-screen flex items-center justify-center "
        style={{ backgroundImage: `url(${pink})`, backgroundSize: 'cover' }}
      >
        </div>
    );
};

export default Testimonials;