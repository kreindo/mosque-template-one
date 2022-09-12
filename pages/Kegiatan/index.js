import Layout from '../../components/Layout';import PageTemplate from '../../components/PageTemplate';
import { KegiatanBox } from '../../components/KegiatanBox';
const Index = () => {
  return (
    <Layout title={"Kegiatan | Masjid Al-Mu'awanah"} active={'Kegiatan'}>
      <PageTemplate title={"Kegiatan Masjid Al-Mu'awanah"}>
        Program dan fasilitas yang dilakukan seperti: <br />
        1. Kajian Rutin Ba’da Subuh Setiap Hari Selasa Bersama{' '}
        <b>Ustadz Muslim Bahar, S.Pd.I, M.Pd</b>. <br />
        2. Kajian Rutin Ba’da Subuh, Setiap Hari jumat Bersama{' '}
        <b>Ustadz Khaerul Ikhsan, S.TH.I</b> yang kesemuanya dilanjutkan dengan
        sarapan bersama. <br />
        3. Makan bersama setiap malam Jumat yang dilanjutkan dengan pengajian
        rutin (Liqo) bersama Komunitas Pejuang Subuh. <br />
        4. Program Jumat Berkah (makan bersama setiap selesai Sholat Jumat dalam
        bentuk prasmanan). <br />
        5. Menyiapkan kopi, teh, air minum gratis (seduh sendiri), layanan wifi
        gratis. <br />
        6. bantuan sosial kepada jamaah dan warga yang membutuhkan. <br />
        7. Layanan Mobil Ambulance gratis.
      </PageTemplate>
      <div>
        <KegiatanBox title={'Kajian Rutin Ba’da Subuh'} dummy={false}>
          Setiap Hari Selasa dan Hari jumat Bersama Ustadz Muslim Bahar, S.Pd.I,
          M.Pd. dan Ustadz Khaerul Ikhsan, S.TH.I yang kesemuanya dilanjutkan
          dengan sarapan bersama.
        </KegiatanBox>
        <KegiatanBox title={'Kajian Rutin Ba’da Subuh'} dummy>
          Setiap Hari Selasa Bersama Ustadz Muslim Bahar, S.Pd.I, M.Pd.
        </KegiatanBox>
        <KegiatanBox title={'Kajian Rutin Ba’da Subuh'}>
          Setiap Hari Selasa Bersama Ustadz Muslim Bahar, S.Pd.I, M.Pd.
        </KegiatanBox>
        <KegiatanBox title={'Kajian Rutin Ba’da Subuh'}>
          Setiap Hari Selasa Bersama Ustadz Muslim Bahar, S.Pd.I, M.Pd.
        </KegiatanBox>
      </div>
    </Layout>
  );
};

export default Index;
