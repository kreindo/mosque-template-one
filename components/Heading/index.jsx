import MapnContact from './MapnContact';const Index = (props) => {
  const { className, children, withButton, title } = props;
  return (
    <div className={`flex flex-col lg:w-[70%] justify-center ${className}`}>
      <h1 className="text-warna-hitam font-extrabold text-[48px] md:text-[48px] mb-[10px] leading-[50px] xl:text-[48px] xl:leading-[58px]">
        {title}
      </h1>
      <div className="w-[125px] lg:w-[125px] h-[5px] bg-warna-hitam"></div>
      <p className="text-warna-hitam font-medium text-[13px] mt-[30px] lg:text-[14]">
        {children}
      </p>
      {withButton ? <MapnContact /> : null}
    </div>
  );
};

export default Index;
