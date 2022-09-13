import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';import Image from 'next/image';
export const PengelolaBox = ({ name, occupation, children }) => {
  return (
    <div className="shadow-md shadow-black-10">
      <div className="border-2 border-blue-500 p-10 mt-[50px] flex flex-col justify-center items-center gap-10">
        <div className="border-2 border-blue-500 flex flex-col items-center gap-6 sm:flex-row">
          <div className="border-2 border-green-500 relative w-40 h-40 sm:h-[20rem]">
            <Image
              className="rounded-full sm:rounded-none"
              src={'https://picsum.photos/id/233/400/400?grayscale'}
              alt={'image'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <h1 className="text-lg font-bold">{name}</h1>
              <span className="sm:block hidden mx-1 text-2xl">&bull;</span>
              <h2 className="text-md text-gray-400">{occupation}</h2>
            </div>
            <div className="mb-10">
              <p className="sm:text-center">{children}</p>
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
