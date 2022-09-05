import { useState } from 'react';import Image from 'next/image';
const Index = ({ seed, msg, src, dummy }) => {
  const [hover, setHover] = useState(false);

  const detectMouseHover = () => {
    console.log('hovered');
    setHover(() => {
      return (hover = true);
    });
  };

  const detectMouseLeave = () => {
    console.log('mouse left :(');
    setHover(() => {
      return (hover = false);
    });
  };
  return (
    <>
      <div className="w-[200px] h-[200px] relative">
        <Image
          src={`${
            dummy == false
              ? `${src}`
              : `${`https://picsum.photos/seed/${seed}/200/200`}`
          }`}
          alt={'image1'}
          width={200}
          height={200}
          onMouseEnter={detectMouseHover}
          onMouseLeave={detectMouseLeave}
        />
      </div>

      {/* to work on, hover shows image description */
      /* {hover === true ? (
          <div className="">
            <h3 className="">{msg}</h3>
          </div>
        ) : (
          <div></div>
        )}
        */}
    </>
  );
};

export default Index;
