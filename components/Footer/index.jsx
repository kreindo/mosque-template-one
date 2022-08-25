import Image from 'next/image';
import logoImage from '../../src/assets/images/logo.png';

const index = () => {
  return (
    <div className=''>
      <Image src={logoImage} alt={'Logo image'} />
    </div>
  );
};

export default index;
