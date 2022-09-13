import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
export const PengelolaBox = ({ name, occupation, children }) => {
  return (
    <div className="shadow-md shadow-black-10">
      <div className="p-10 mt-[50px] flex flex-col items-center gap-10">
        <div className="relative flex items-center gap-6">
          <Image
            className=" max-w-[50%] rounded-full"
            src={'https://picsum.photos/id/237/400/400?grayscale'}
            alt={'image'}
            width={250}
            height={250}
          />
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <h1 className="text-lg font-bold">{name}</h1>
              <span className="mx-1 text-2xl">&bull;</span>
              <h2 className="text-md text-gray-400">{occupation}</h2>
            </div>
            <p>{children}</p>
          </div>
        </div>
        <div className="flex items-end justify-between gap-[126px]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaWhatsapp size={30} />
        </div>
      </div>
    </div>
  );
};
