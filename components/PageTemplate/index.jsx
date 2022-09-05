import ImageBox from '../ImageBox';
import Heading from '../Heading';
import ImageDatas from '../Misc/ImageDatas';
const Index = (props) => {
  const data = ImageDatas;
  console.log({ data });
  const { title, children, button } = props;
  return (
    <div className="mt-[150px]">
      <Heading button={button} title={title}>
        {children}
      </Heading>
      <div className="mt-5 flex flex-wrap gap-3">
        <ImageBox
          dummy={true}
          seed={'123'}
          src={data}
          msg={'tahfidz akhir pekan'}
        />
        <ImageBox dummy={true} seed={'32a'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'dsa'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'23d'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'gfd'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'zxc'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'daw'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'cx2'} src={data} msg={'tahfidz'} />
        <ImageBox dummy={true} seed={'fds'} src={data} msg={'tahfidz'} />
      </div>
    </div>
  );
};

export default Index;
