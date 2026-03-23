import Image from 'next/image';
import BaseMap from '../public/googleearth_BC.svg';

const MapView = ({ onRegionSelect, activeRegionId }) => {
  return (
    <div className="relative w-full h-[600px] border-4 border-black">
      {/* Layer 1: The Satellite Background */}
      <Image 
        src={BaseMap} 
        alt="BC Satellite" 
        layout="fill" 
        objectFit="contain" 
        className="z-0"
      />

      {/* Layer 2: The Interactive SVG Overlay */}
      <svg 
        viewBox="0 0 812.77 660.64" 
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        {/* Replace the placeholder path with your actual region paths */}
        <path
          id="coast-salish"
          d="M339.25,451.14..." // Paste the 'd' string from your SVG file here
          className={`cursor-pointer transition-opacity duration-300 ${
            activeRegionId === 'coast-salish' ? 'fill-red-500 opacity-60' : 'fill-tan-200 opacity-20'
          }`}
          onClick={() => onRegionSelect('coast-salish')}
        />
        
        {/* Add more <path /> elements for each linguistic region */}
      </svg>
    </div>
  );
};