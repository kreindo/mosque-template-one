import Image from 'next/image';import { CarouselData } from './CarouselData';
import { useState } from 'react';

const Index = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="flex">
        <button
          onClick={nextSlide}
          className="w-10 h-4 bg-warna-secondary-hijau hover:bg-white border border-warna-secondary-hijau"
        >
          next
        </button>
        <button
          onClick={prevSlide}
          className="w-10 h-4 bg-warna-secondary-hijau hover:bg-white border border-warna-secondary-hijau"
        >
          prev
        </button>
      </div>
      {CarouselData.map((img, index) => {
        return (
          <div
            className="w-[300px] h-[600px] flex justify-center items-center relative"
            key={`image index - ${index}`}
          >
            <Image
              // src={img.image}
              src={`/${img.image}`}
              alt="mosque image"
              // width={500}
              // height={1000}
              layout="fill"
              objectFit="cover"
            />
          </div>
        );
      })}
    </>
  );
};

export default Index;
