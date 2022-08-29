import SliderItem from './SliderItem';const Index = () => {
  const arr = ['poster 1', 'poster 2'];
  return (
    <div className="mt-[10em] flex">
      {arr.map((arrDat) => {
        return <SliderItem key={arrDat} iteration={arrDat.index} />;
      })}
    </div>
  );
};

export default Index;
