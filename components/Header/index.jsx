import logoImage from '../../src/assets/images/logo.png';
import Image from 'next/image';
export default function Header() {
  return (
    <>
      <Image src={logoImage} alt="Logo here" />
    </>
  );
}
