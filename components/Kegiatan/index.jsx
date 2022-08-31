import ImageBox from '../ImageBox';
import Heading from '../Heading';
const Index = () => {
  return (
    <div className="mt-12">
      <Heading button={false} title={"Kegiatan Masjid Mu'awanah"}>
        Daftar Kegiatan Masjid Mu'awanah Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus, commodi. Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, sit
        perspiciatis consequuntur cum fugit praesentium error facilis deleniti
        illum quasi.
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
