import ImageBox from '../ImageBox';import Heading from '../Heading';
const Index = (props) => {
  const { title, children, button } = props;
  return (
    <div className="mt-12">
      <Heading button={button} title={title}>
        {children}
      </Heading>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </div>
    </div>
  );
};

export default Index;
