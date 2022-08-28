import Image from 'next/image';import logoImage from '../../src/assets/images/logoMosqueText.svg';

const index = () => {
  return (
    <div className="flex justify-between items-center mt-10 py-20">
      <div className="flex gap-8 brightness-0 invert">
        <Image src={logoImage} alt={'Logo image'} />
        <div className="border-r border-black"></div>
      </div>
      <div className="flex">
        <div className="mr-10">
          <ul className="text-white">
            <li>Home</li>
            <li>Kegiatan</li>
            <li>Pengelola</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="border-r border-white mr-5"></div>
        <div className="flex flex-col gap-5">
          <div className="text-white">quick links</div>
          <div className="flex">
            <div className="bg-white w-[30px] h-[30px] rounded-md mr-1"></div>
            <div className="bg-white w-[30px] h-[30px] rounded-md mr-1"></div>
            <div className="bg-white w-[30px] h-[30px] rounded-md mr-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
