import Layout from '../components/Layout';import Hero from '../components/Hero';
import Kegiatan from '../components/SPA/Kegiatan';
import Pengelola from '../components/SPA/Pengelola';
import Kontak from '../components/SPA/Kontak';

export default function App() {
  return (
    <Layout title={"Home | Masjid Al-Mu'awanah"} active={'Home'}>
      <Hero Masjid={"Masjid Al-Mu'awanah"} />
      <Kegiatan id={'Kegiatan'} />
      <Pengelola id={'Pengelola'} />
      <Kontak id={'Kontak'} />
    </Layout>
  );
}
