// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Home = () => {
//   const [apod, setApod] = useState({});

//   const fetchApodData = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/apod`);
//       const data = await response.json();
//       setApod(data);
//     } catch (error) {
//       console.error("Error fetching APOD data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchApodData();
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ position: 'relative' }}>
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ 
//             backgroundImage: `url(${apod.hdurl})`,
//             opacity: 0.7,  // Adjust this value to change the opacity
//             zIndex: -1 
//           }}
//         ></div>

//         <div className="bg-black bg-opacity-70 p-6 rounded-lg text-white text-center shadow-lg flex flex-col items-center w-full max-w-5xl relative">
//           <h1 className="text-5xl font-bold mb-6">Astronomy Picture of the Day</h1>

//           {/* Image with description below */}
//           <div className="flex flex-col items-center w-full">
//             {/* Image */}
//             <img 
//               src={apod.hdurl} 
//               alt={apod.title} 
//               className="rounded-lg max-w-full transition-transform duration-300 transform hover:scale-105 mb-4" 
//             />

//             {/* Description */}
//             <div className="w-full max-w-full">
//               <p className="text-lg italic">{apod.explanation}</p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <Footer mainText="Asteroid Picture of the Day. All Rights Reserved." subText="Built with love for astronomy enthusiasts." />
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const [apod, setApod] = useState({});

  const fetchApodData = async () => {
    try {
      const response = await fetch(`https://nasa-app-backenddd.onrender.com/api/apod`);
      const data = await response.json();
      setApod(data);
    } catch (error) {
      console.error("Error fetching APOD data:", error);
    }
  };

  useEffect(() => {
    fetchApodData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ position: 'relative' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${apod.hdurl})`,
            opacity: 0.7,
            zIndex: -1 
          }}
        ></div>

        <div className="bg-black bg-opacity-70 p-6 rounded-lg text-white text-center shadow-lg flex flex-col items-center w-full max-w-5xl relative"
             style={{ fontFamily: "'Roboto', sans-serif" }}> {/* Apply the font here */}
          <h1 className="text-5xl font-bold mb-6">Astronomy Picture of the Day</h1>

          {/* Image with description below */}
          <div className="flex flex-col items-center w-full">
            {/* Image */}
            <img 
              src={apod.hdurl} 
              alt={apod.title} 
              className="rounded-lg max-w-full transition-transform duration-300 transform hover:scale-105 mb-4" 
            />

            {/* Description */}
            <div className="w-full max-w-full">
              <p className="text-lg italic">{apod.explanation}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer mainText="Asteroid Picture of the Day. All Rights Reserved." subText="Built with love for astronomy enthusiasts." />
    </>
  );
};

export default Home;
