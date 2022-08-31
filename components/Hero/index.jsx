import Image from 'next/image';import logoImage from '../../src/assets/images/logo.png';
import Header from '../Header';
import Heading from '../Heading';
// import HeroTwoBlock from '../../src/assets/images/HeroTwoBlock.svg';
import MosqueHeroImg from '../../src/assets/images/imgHeroComplete.png';
import Button from '../Button';
export default function Hero() {
  return (
    <>
      <div className="flex lg:mt-[100px] gap-[150px]">
        <div className="block">
          <Image src={MosqueHeroImg} alt={'Hero Mosque Image'} />
          {/* <Image src={HeroTwoBlock} alt={'Hero image'} /> */}
        </div>
        <Heading withButton title={"Welcome to Masjid Mu'awanah Landing Page"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          molestias corporis dolorum quam cum facilis aperiam dolores iusto
          tempore? Unde!
        </Heading>
      </div>
    </>
  );
}
