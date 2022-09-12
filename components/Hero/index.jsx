import Image from 'next/image';import Heading from '../Heading';
import MosqueHeroImg from '../../src/assets/images/imgHero5.png';
export default function Hero({ Masjid }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-[100px] gap-[150px]">
        <div className="block">
          <Image src={MosqueHeroImg} alt={'Hero Mosque Image'} className />
          {/* <Image src={HeroTwoBlock} alt={'Hero image'} /> */}
        </div>
        <Heading withButton title={`Selamat Datang di ${Masjid} Landing Page`}>
          Masjid Al Muawanah terletak di Jl. Jend. Sudirman Kel. Terang Terang
          Kec. Ujung Bulu Kab. Bulukumba Sulsel, Masjid yang terletak di jalan
          poros Kota Bulukumba. Masjid yang dibangun dari swadaya Masyarakat.
          sekitar tahun 1930 an. Dan Terus mengalami renovasi di Tahun 1980, dan
          ditahun 1992. Dan renovasi terakhir di Tahun 2008. Dan saat ini Masjid
          Al-Muawanah terus berbenah, Tampilan Masjid Saat ini tidak terlalu
          megah, namun pengurus senantiasa mendorong peningkatkan fasilitas dan
          kenyamanan jamaah. Dan peningkatan berbagai program untuk umat.
        </Heading>
      </div>
    </>
  );
}
