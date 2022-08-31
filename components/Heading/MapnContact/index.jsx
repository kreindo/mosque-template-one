import Button from '../../Button';
const Index = () => {
  return (
    <div className="flex items-center mt-[20px]">
      <Button
        className="mr-[22px] text-white font-semibold text-[15px] bg-black w-[149px] h-[42px] rounded-full hover:bg-warna-secondary-hijau border border-black transition-all"
        name="Google Maps >"
        link={'https://maps.google.com'}
      />
      <Button
        className="font-bold text-[15px] text-black"
        name="Contact Us"
        link={'https://minecraft.net'}
      />
    </div>
  );
};

export default Index;
