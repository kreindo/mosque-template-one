import Layout from '../../components/Layout';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGoogle,
  FaWhatsappSquare,
} from 'react-icons/fa';
import Heading from '../../components/Heading';
import Link from 'next/link';
const Index = () => {
  return (
    <Layout title={"Kontak | Masjid Mu'awanah"} active={'Kontak'}>
      <div className="flex items-center justify-between my-[150px]">
        <div className="flex flex-col justify-center">
          <h1 className="font-extrabold md:text-[48px] mb-[10px] leading-[50px] xl:text-[48px] xl:leading-[58px]">
            Kontak Masjid Mu&apos;awanah
          </h1>
          <div className="lg:w-[125px] h-[5px] bg-[black]"></div>
        </div>
        <div className="font-bold text-2xl flex flex-col gap-8">
          <div className="flex items-center gap-5 text-black">
            <Link href={'/Kontak'}>
              <FaWhatsappSquare />
            </Link>
            <Link href={'/Kontak'}>
              <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
                +62812-0098-5643
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-5 text-black">
            <Link href={'/Kontak'}>
              <FaFacebookSquare />
            </Link>
            <Link href={'/Kontak'}>
              <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
                masjid mu&apos;awanah
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-5 text-black">
            <Link href={'/Kontak'}>
              <FaInstagramSquare />
            </Link>
            <Link href={'/Kontak'}>
              <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
                masjid mu&apos;awanah
              </h1>
            </Link>
          </div>
          <div className="flex gap-5 items-center" href={'/Kontak'}>
            <FaGoogle />
            <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
              masjidmuawanah@gmail.com
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
