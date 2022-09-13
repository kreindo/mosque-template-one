import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGoogle,
  FaWhatsappSquare,
} from 'react-icons/fa';
import Link from 'next/link';
const index = ({ id }) => {
  return (
    <div
      id={id}
      className="flex flex-col lg:flex-row items-center justify-between my-[150px]"
    >
      <div className="flex flex-col w-[30%] justify-center">
        <h1 className="font-extrabold md:text-[48px] mb-[10px] leading-[50px] xl:text-[48px] xl:leading-[58px]">
          Kontak Masjid Mu&apos;awanah
        </h1>
        <div className="w-[125px] h-[5px] mb-20 bg-[black]"></div>
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
  );
};

export default index;
