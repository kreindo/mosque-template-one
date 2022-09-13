import { data } from 'autoprefixer';
import Image from 'next/image';
import ImageBox from '../ImageBox';
import { TalimImages } from '../Misc/TalimImages';
export const KegiatanBox = ({ title, children, dummy, phldr }) => {
  const datas = TalimImages;
  return (
    <div className="mb-[130px] relative">
      <div className="w-[50%]">
        <h1 className="relative z-[2] font-bold text-[24px] mb-[28px]">
          {title}
        </h1>
        <div className="absolute top-5 w-20 h-[10px] bg-warna-secondary-hijau"></div>
        <p className="font-medium text-[13px] mb-[28px]">{children}</p>
      </div>
      <div className="flex flex-wrap gap-[18px]">
        {datas.map((data, index) => {
          return (
            <ImageBox
              src={data.image}
              alt={`image ${index}`}
              key={index}
              dummy={dummy}
            />
          );
        })}
      </div>
      {/* <div className="w-[200px] h-[200px] relative">
        <Image
          src={`${
            dummy == false
              ? `${src}`
              : `${`https://picsum.photos/seed/${seed}/200/200`}`
          }`}
          alt={'image1'}
          layout={'fill'}
          objectFit={'cover'}
          onMouseEnter={detectMouseHover}
          onMouseLeave={detectMouseLeave}
        />
      </div> */}
    </div>
  );
};
