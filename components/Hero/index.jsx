import Image from 'next/image';
import logoImage from '../../src/assets/images/logo.png';
import Header from '../Header';
import HeroTwoBlock from '../../src/assets/images/HeroTwoBlock.svg';
export default function Hero() {
  return (
    <>
      <div className="z-[-1] lg:w-[1235px] h-[431px] bg-warna-primary-maroon absolute left-[250px] top-[-346px] rotate-[10deg]"></div>
      <div className="lg:mt-[100px] grid grid-cols-2 gap-[150px]">
        <div className="hidden lg:block">
          <Image src={HeroTwoBlock} alt={'Hero image'} />
        </div>
        <div className="flex flex-col w-[70%] justify-center">
          <h1 className="text-[24px] mb-[10px] leading-[56px] lg: overflo text-[48px] font-extrabold">
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
