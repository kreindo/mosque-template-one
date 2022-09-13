import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
export const PengelolaBox = ({ name, occupation, children }) => {
  return (
    <div className="relative shadow-lg shadow-red-500 w-[800px] h-[200px] border-2 border-blue-500">
      <div className="absolute mt-[50px] flex flex-col justify-center items-center gap-10 border-2 border-red-800">
        <div className="border-2 border-cyan-500 flex flex-col items-center gap-2 sm:flex-row">
          <div className="border-2 border-green-500 relative w-[300px] h-[300px] sm:h-[7rem]">
            <Image
              className="rounded-full"
              src={'https://picsum.photos/id/233/400/400?grayscale'}
              alt={'image'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-col items-center justify-center sm:items-start">
              <h1 className="text-md text-gray-500">{occupation}</h1>
              <h1 className="text-lg font-bold">{name}</h1>
            </div>
            <div className="mb-10">
              <p className="text-center sm:text-start">{children}</p>
            </div>
            <div className="flex justify-center items-center gap-10 sm:gap-[126px]">
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaWhatsapp size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
