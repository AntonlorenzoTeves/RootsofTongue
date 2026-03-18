import Image from 'next/image';
import logoAsset from '../../images/SVG/logo.svg'; // Go up to components, then src, then images

export default function SidebarLogo() {
  return (
    <Image
      src={logoAsset}
      alt="Logo"
      width={300}
      height={300}
      priority // Good practice for header logos
    />
  );
}