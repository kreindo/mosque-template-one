import React from 'react';import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Kegiatan from '../../components/Kegiatan';

const Index = () => {
  return (
    <Layout title={"Kegiatan | Masjid Mu'awanah"} active={'Kegiatan'}>
      <Kegiatan />
    </Layout>
  );
};

export default Index;
