import Image from 'next/image';
import logoImage from '../../src/assets/images/logoMosqueText.svg';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa';

const index = () => {
  return (
    <div className="flex flex-col gap-10 justify-between items-center mt-10 py-20">
      <div className="flex gap-8 brightness-0 invert">
        <Image src={logoImage} alt={'Logo image'} />
      </div>
      {/* <div className="flex gap-[100px]">
        <div className="flex flex-col">
          <div className="text-white font-bold">Link</div>
          <div className="mr-10">
            <ul className="text-white">
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/Kegiatan'}>Kegiatan</Link>
              </li>
              <li>
                <Link href={'/Pengelola'}>Pengelola</Link>
              </li>
              <li>
                <Link href={'/Kontak'}>Kontak</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-r border-white mr-5"></div>
        <div className="flex flex-col gap-5">
          <div className="text-white font-bold">Hubungi Kami</div>
          <div className="flex justify-between invert">
            <Link href={''}>
              <FaGoogle className="cursor-pointer" />
            </Link>
            <Link href={''}>
              <FaFacebook className="cursor-pointer" />
            </Link>
            <Link href={''}>
              <FaInstagram className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="ml-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63537.2326633117!2d120.1260527!3d-5.5555982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbbff9b0734dbc7%3A0x599126de1d063459!2sMasjid%20Al%20Muawanah!5e0!3m2!1sen!2sid!4v1662284776570!5m2!1sen!2sid"
            width={300}
            height={250}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading={'lazy'}
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default index;
