// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Slider from '../components/Slider';

export default function App() {
  return (
    <>
      {/* <div>test</div> */}
      <Layout title={"Home | Masjid Mu'awanah"} active={'Home'}>
        <Hero />
        <Slider />
      </Layout>
    </>
  );
}
