import SliderItem from './SliderItem';const Index = () => {
  const arr = ['1', '2', '3', '4', '5'];
  return (
    <div className="mt-[10em] flex overflow-x-scroll">
      {arr.map((arrDat) => {
        return <SliderItem key={arrDat} iteration={arrDat.index} />;
      })}
    </div>
  );
};

export default Index;
