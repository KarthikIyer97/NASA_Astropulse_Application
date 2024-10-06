
import React from 'react';

const NeoCard = ({ neo }) => {
  // Get the closest approach data
  const closestApproach = neo.close_approach_data.reduce((prev, current) => {
    return (new Date(current.close_approach_date) < new Date(prev.close_approach_date)) ? current : prev;
  });

  return (
    <div className="bg-slate-800 text-center text-white border border-gray-300 rounded-lg pt-4 pb-4 shadow-lg transition duration-300 hover:shadow-2xl w-96 h-auto">
      <h3 className="text-xl font-semibold mb-2">{neo.name}</h3>
      <p>
        <strong>Estimated Diameter(Max):</strong> {neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} meters
      </p>
      <p>
        <strong>Estimated Diameter(Min):</strong> {neo.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} meters
      </p>
      <p>
        <strong>Potentially Hazardous:</strong> {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Absolute Magnitude:</strong> {neo.absolute_magnitude_h.toFixed(2)}
      </p>
      <p>
        <strong>Approach Date:</strong> {closestApproach.close_approach_date_full}
      </p>
    </div>
  );
};

export default NeoCard;



