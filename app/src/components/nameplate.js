import Image from 'next/image';
import nameplateAsset from '../images/SVG/nameplate1.svg';

export default function Nameplate({ text }) {
  return (
    // 'max-w-[220px]' keeps the nameplate small
    // 'mx-auto' keeps it centered inside the sidebar
    <div className="relative w-full max-w-[220px] h-[50px] mx-auto flex items-center group cursor-pointer transition-transform hover:scale-105">
      
      {/* BACKGROUND SVG LAYER */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src={nameplateAsset} 
          alt="" 
          fill
          className="object-contain" 
          priority
        />
      </div>

      {/* TEXT LAYER */}
      {/* Padding adjusted to fit the 'window' in your SVG asset */}
      <div className="w-full pl-12 pr-10"> 
        <span className="text-[#2d3319] font-bold text-[10px] tracking-tight truncate block">
          {text}
        </span>
      </div>
    </div>
  );
}