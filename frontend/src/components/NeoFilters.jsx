
import React, { useState } from 'react';

const NeoFilters = ({ onFilterChange }) => {
  const [nearestApproachDate, setNearestApproachDate] = useState('');
  const [isPotentiallyHazardous, setIsPotentiallyHazardous] = useState(false); // State for checkbox

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange(nearestApproachDate, isPotentiallyHazardous); // Pass the selected date and checkbox state to the parent
  };

  return (
  

    <form onSubmit={handleFilterSubmit} className="flex justify-center items-center mb-6">
    <div className="mx-2">
    <label className='block text-sm font-medium mb-1'>Filter Date on Nearest Appraoch:</label>
    <input
        type="date"
        value={nearestApproachDate}
        onChange={(e) => setNearestApproachDate(e.target.value)}
        className="bg-gray-800 text-white border border-gray-600 p-2 rounded mb-2"
      />
    </div>
    <div className='mx-2'>
    <label className="text-white mb-2">
        <input
          type="checkbox"
          checked={isPotentiallyHazardous}
          onChange={(e) => setIsPotentiallyHazardous(e.target.checked)}
            className='bg-gray-800 border border-gray-600 text-white p-2 rounded-md'
        />
 Potentially Hazardous:
</label>
    </div>

    <button
        type='submit'
        className='bg-blue-600 text-white mt-4 px-4 py-2 rounded-md ml-2 hover:bg-blue-700'
    >
        Filter
    </button>
</form>
  );
};

export default NeoFilters;

