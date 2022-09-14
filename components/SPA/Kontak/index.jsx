import {  FaFacebookSquare,
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
          <FaWhatsappSquare />
          <a
            target={'_blank'}
            rel="noreferrer"
            href={'https://wa.me/+6281200985643'}
          >
            <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
              +62812-0098-5643
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-5 text-black">
          <FaFacebookSquare />
          <a href={'#'}>
            <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
              masjid mu&apos;awanah
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-5 text-black">
          <FaInstagramSquare />
          <a target={'_blank'} rel="noreferrer" href={'#'}>
            <h1 className="cursor-pointer hover:text-warna-secondary-hijau transition-all">
              masjid mu&apos;awanah
            </h1>
          </a>
        </div>
        <div className="flex gap-5 items-center" href={'#'}>
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
