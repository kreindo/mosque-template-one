import logoImage from '../../src/assets/images/logo.png';import Image from 'next/image';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="mx-[11%] flex items-center">
      <Image src={logoImage} alt="Logo here" />
      <div>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/Kegiatan'}>Kegiatan</Link>
          </li>
          <li>
            <Link href={'/Pengelola'}>Pengelola</Link>
          </li>
          <li>
            <Link href={'/Kontak'}>Kontak</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
