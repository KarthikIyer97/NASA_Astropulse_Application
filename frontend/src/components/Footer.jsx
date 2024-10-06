// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 p-4 text-center">
//       <p className="text-white">© 2024 Asteroid Tracker. All Rights Reserved.</p>
//       <p className="text-gray-400">Built with love for astronomy enthusiasts.</p>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = ({ mainText, subText }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p className="text-white">© {currentYear} {mainText}</p>
      <p className="text-gray-400">{subText} </p>
    </footer>
  );
};

export default Footer;

