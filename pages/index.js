// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { CarouselData } from '../components/Carousel/CarouselData';
import Carousel from '../components/Carousel';

export default function App() {
  return (
    <>
      {/* <div>test</div> */}
      <Layout title={"Home | Masjid Mu'awanah"} active={'Home'}>
        <Hero />
        <Slider className={''} />
        <div className="mt-[100px] text-center">X</div>
        <div className="w-full h-[20em] bg-warna-primary-maroon"></div>
        <div className="mt-[100px] text-center">X</div>
        <Carousel images={CarouselData} />
      </Layout>
    </>
  );
}
