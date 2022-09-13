import Button from '../../Button';
const Index = () => {
  return (
    <div className="flex items-center mt-[20px]">
      <Button
        className="mr-[22px] text-white font-semibold text-[15px] bg-warna-hitam w-[149px] h-[42px] rounded-full hover:bg-warna-secondary-hijau border border-warna-hitam transition-all"
        name="Google Maps >"
        link={'https://goo.gl/maps/7pU4u5Ci3GCqHUeT6'}
      />
      <Button
        className="font-bold text-[15px] text-warna-hitam"
        name="Hubungi Kami"
        link={'/Kontak'}
      />
    </div>
  );
};

export default Index;
