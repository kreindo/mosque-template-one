import ImageBox from '../ImageBox';
import Heading from '../Heading';
import { ImageDatas } from '../Misc/ImageDatas';
const Index = (props) => {
  const datas = ImageDatas;
  console.log({ datas });
  const { title, children, button, images } = props;
  return (
    <div className="mt-[150px]">
      <Heading button={button} title={title}>
        {children}
      </Heading>
      {images !== true ? null : (
        <div className="mt-5 flex flex-wrap gap-3">
          {datas.map((data, index) => {
            return (
              <ImageBox
                dummy={false}
                seed={'asd'}
                src={data.image}
                msg={'img'}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Index;
