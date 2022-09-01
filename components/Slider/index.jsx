import SliderItem from './SliderItem';const Index = (props) => {
  const { className } = props;
  const arr = ['1', '2', '3', '4', '5'];
  return (
    <div className={`${'mt-[10em] flex overflow-x-scroll ' + className}`}>
      {arr.map((arrDat) => {
        return <SliderItem key={arrDat} iteration={arrDat.index} />;
      })}
    </div>
  );
};

export default Index;
