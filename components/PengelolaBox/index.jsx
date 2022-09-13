import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';import Image from 'next/image';
export const PengelolaBox = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex items-center gap-8">
          <div className="overflow-hidden p-10 w-20 h-20 rounded-full">
            <Image
              src={'https://picsum.photos/seed/sasdeed/200/200'}
              alt={'image'}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Heading</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus in veniam dolor reprehenderit itaque? Recusandae
              delectus ducimus voluptatibus unde placeat!
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between gap-[126px]">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaWhatsapp size={30} />
        </div>
      </div>
    </>
  );
};
