import Image from 'next/image';
const Index = () => {
  return (
    <>
      <div className="w-[400px] h-[400px] relative">
        <Image
          src={'https://picsum.photos/seed/picsum/200/300'}
          alt={'image1'}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
    </>
  );
};

export default Index;
