import Image from 'next/image';
import Heading from '../Heading';
import MosqueHeroImg from '../../src/assets/images/imgHero5.png';
export default function Hero({ Masjid }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[50px] gap-[150px]">
        <div className="block">
          <Image src={MosqueHeroImg} alt={'Hero Mosque Image'} className />
          {/* <Image src={HeroTwoBlock} alt={'Hero image'} /> */}
        </div>
        <Heading withButton title={`Selamat Datang di ${Masjid} Landing Page`}>
          Masjid Al-Mu&apos;awanah, beralamat di jl. Jend. Sudirman, Kel.
          Terang-terang kabupaten bulukumba.
        </Heading>
      </div>
    </>
  );
}
