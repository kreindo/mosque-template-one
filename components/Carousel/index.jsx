import Image from 'next/image';import { CarouselData } from './CarouselData';
import { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

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
    <div className="flex justify-center items-center mt-[100px]">
      <div className="w-[300px] h-[600px] flex flex-row justify-center items-center relative">
        <div className="flex absolute z-10 h-full">
          <button className="relative right-full" onClick={nextSlide}>
            <FaArrowCircleLeft
              className="fill-warna-secondary-hijau"
              size={30}
            />
          </button>
          <button className="relative left-full" onClick={prevSlide}>
            <FaArrowCircleRight
              className="fill-warna-secondary-hijau"
              size={30}
            />
          </button>
        </div>
        {CarouselData.map((img, index) => {
          return (
            <Image
              key={`image index - ${index}`}
              src={`/${img.image}`}
              alt="mosque image"
              layout="fill"
              objectFit="cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
