import ImageBox from '../ImageBox';import Heading from '../Heading';
import { ImageDatas } from '../Misc/ImageDatas';
const Index = (props) => {
  const datas = ImageDatas;
  console.log({ datas });
  const { title, children, button } = props;
  return (
    <div className="mt-[150px]">
      <Heading button={button} title={title}>
        {children}
      </Heading>
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
        {/* <ImageBox
          dummy={false}
          seed={'123'}
          src={data}
          msg={'tahfidz akhir pekan'}
        />
        <ImageBox dummy={false} seed={'32a'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'dsa'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'23d'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'gfd'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'zxc'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'daw'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'cx2'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={false} seed={'fds'} src={data} msg={'tahfidz'} /> */}
      </div>
    </div>
  );
};

export default Index;
