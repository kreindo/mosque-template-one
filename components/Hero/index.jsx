import Image from 'next/image';import logoImage from '../../src/assets/images/logo.png';
import Header from '../Header';

export default function Hero() {
  return (
    <>
      <div>
        <Header>
          <Image src={logoImage} alt="logo" />
        </Header>
      </div>
    </>
  );
}
