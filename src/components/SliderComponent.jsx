

// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



// const apikey = "2615b0fc1b5fb9c832485713ed986758";
// const url = "http://api.themoviedb.org/3"
// const imgUrl = "http://image.tmdb.org/t/p/original"
// const upcoming = "upcoming"











// const Banner = () => {
//     const [carouselData, setCarouselData] = useState([]);

//     useEffect(() => {

//         const fetchCarousel = async () => {
//             const { data: { result } } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
//             setCarouselData(result)
//         }
//         fetchCarousel();


//     }, [])

//     const setting = {
//         dots: true,
//         infinite: true,
//         speed: 3000,
//         slideToShow: 1,
//         slideToScroll: 1,
//     };



//     return (


//         <div>
//             hii
//             {
//                 (
//                     <Slider {...setting}>

//                         {
//                             carouselData.map((item, index) => (
//                                 <div key={index}>
//                                     <img src={`${imgUrl}/${item.poster_path}`} alt="Banner" />
//                                     <h3>{item.original_title}</h3>

//                                 </div>
//                             )
//                             )
//                         }

//                     </Slider>
//                 )
//             }

//         </div>
//     )

// }

// export default Banner
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dp from '../assests/pxfuel.jpg'
import dp1 from '../assests/pxfuel1.jpg'
import dp2 from '../assests/pxfuel2.jpg'
import dp3 from '../assests/pxfuel3.jpg'
import dp4 from '../assests/pxfuel4.jpg'


const data = [ 
    {url: dp},
    {url: dp1},
    {url: dp2},
    {url: dp3},
    {url: dp4},

    
    // Add more images as needed
  ];

  const SliderComponent = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="relative">
      {data.length > 0 && (
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img className="object-full min-w-full h-[470px]" src={item.url} alt="img" />
             
            </div>
          ))}
        </Slider>

        
      )}

      <div className='absolute top-48 left-0 z-10 px-6 w-[600px] font-sans text-slate-300'>
        <h1 className='font-extrabold text-4xl text-red-600 '>JOIN NOW</h1>
        <p className='tracking-wide py-2'>Awarded by Order of Merlin First Class, Headmaster of Hogwarts School of Witchcraft and Wizardry, Lover of Sherbet Lemons, Grand Sorcerer, Bearer of the Ring, Supreme Mugwump of the International Confederation of Wizards, Wielder of the Elder Wand, Chief Warlock of the Wizengamot, and Proud Disciple of Machiavelli.</p>

        <div className=' p-3  flex items-center text-center'>
          <button className='bg-gray-200 text-red-500 px-6 py-1 rounded-full font-bold flex items-center justify-center transition duration-300 ease-in-out hover:bg-red-700 hover:text-white'> SIGN UP  </button>
            
        </div>

      </div>
      

      
    </div>
  );
};
export default SliderComponent;

  

  
// const [activeImageIndex, setActiveImage] = useState(0);

// const handlePreviousClick= ()=>{
//     setActiveImage (
//         !activeImageIndex? data.length-1: activeImageIndex-1
//     );
// };
// const handleNextClick = ()=>{
//     setActiveImage((activeImageIndex+1) % data.length);
// };


//   return (
//     <div className="absolute  justify-center">
//         <button className=' font-bold p-1 m-1' onClick={handlePreviousClick}>Pre</button>
      
//         {
//             data.map((item, index)=>(
//                 <img className={" h-[500px] object-contain " + (activeImageIndex === index? "block": "hidden" )}
//                  key={index} src={item.url} alt="banner"/>
//             ))
//         }

//         <button className=' font-bold p-1 m-1'  onClick={handleNextClick}>next</button>
//     </div>
//   );
// };
// export default SliderComponent;