import Image from 'next/image';import logoImage from '../../src/assets/images/logo.png';
import Header from '../Header';
// import HeroTwoBlock from '../../src/assets/images/HeroTwoBlock.svg';
import MosqueHeroImg from '../../src/assets/images/imgHeroComplete.png';
import Button from '../Button';
export default function Hero() {
  return (
    <>
      <div className="grid-rows-2 lg:mt-[100px] grid grid-cols-2 gap-[150px]">
        <div className="block">
          <Image src={MosqueHeroImg} alt={'Hero Mosque Image'} />
          {/* <Image src={HeroTwoBlock} alt={'Hero image'} /> */}
        </div>
        <div className="flex flex-col lg: w-[90%] justify-center">
          <h1 className="font-extrabold md:text-[48px] mb-[10px] leading-[50px] xl:text-[24px] xl:leading-[100px]">
            Welcome to
            <br />
            Masjid Amirul Mu’awanah
            <br />
            Landing Page
          </h1>
          <div className="lg:w-[125px] h-[5px] bg-[black]"></div>
          <p className="font-medium text-[13px] mt-[30px] lg:text-[14]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
            nibh nibh, at maximus ante fermentum sit amet
          </p>
          <div className="flex items-center mt-[20px]">
            <Button
              className="mr-[22px] text-white font-semibold text-[15px] bg-black w-[149px] h-[42px] rounded-full hover:bg-warna-secondary-hijau border border-black transition-all"
              name="Google Maps >"
              link={'https://maps.google.com'}
            />
            <Button
              className="font-bold text-[15px] text-black"
              name="Contact Us"
              link={'https://minecraft.net'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
