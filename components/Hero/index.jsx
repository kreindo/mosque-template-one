import Image from 'next/image';import logoImage from '../../src/assets/images/logo.png';
import Header from '../Header';
import Intersect from '../../src/assets/images/Intersect.svg';
import HeroTwoBlock from '../../src/assets/images/HeroTwoBlock.svg';
import MosqueHeroImg from '../../src/assets/images/clipmosque.svg';
import Mosque from '../../src/assets/images/mosque.png';
export default function Hero() {
  return (
    <>
      <div className="absolute top-0 right-0 z-[-1]">
        <Image src={Intersect} alt={'Intersect cube'} />
      </div>
      <div className="lg:mt-[100px] grid grid-cols-2 gap-[150px]">
        <div className="hidden lg:block">
          <div>test</div>
          <Image src={MosqueHeroImg} alt={'Hero Mosque Image'} />
          <Image src={HeroTwoBlock} alt={'Hero image'} />
        </div>
        <div className="flex flex-col w-[70%] justify-center">
          <h1 className="text-[24px] mb-[10px] leading-[56px] lg:text-[48px] font-extrabold">
            Welcome to Masjid Amirul Mu’awanah Landing Page
          </h1>
          <div className="lg:w-[125px] h-[5px] bg-[black]"></div>
          <p className="text-[13px] mt-[30px] lg:text-[14]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet
          </p>
        </div>
      </div>
    </>
  );
}
