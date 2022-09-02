import Image from 'next/image';import Heading from '../Heading';
import MosqueHeroImg from '../../src/assets/images/imgHero5.png';
export default function Hero() {
  return (
    <>
      <div className="flex lg:mt-[50px] gap-[150px]">
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
