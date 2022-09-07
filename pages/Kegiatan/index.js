import Layout from '../../components/Layout';import PageTemplate from '../../components/PageTemplate';

const Index = () => {
  return (
    <Layout title={"Kegiatan | Masjid Al-Mu'awanah"} active={'Kegiatan'}>
      <PageTemplate title={"Kegiatan Masjid Al-Mu'awanah"}>
        Masjid Mu&apos;awanah memiliki beberapa kegiatan seperti ta&apos;lim,
        dan Tahfidz memberikan akses mudah untuk jamaah agar belajar lebih
        banyak tentang agama.
      </PageTemplate>
    </Layout>
  );
};

export default Index;
