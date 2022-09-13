import PageTemplate from '../../../components/PageTemplate';import { KegiatanBox } from '../../../components/KegiatanBox';
const Index = ({ id }) => {
  return (
    <div id={id}>
      <PageTemplate title={"Kegiatan Masjid Al-Mu'awanah"} />
      <KegiatanBox title={'Kajian Rutin Ba’da Subuh'} dummy={false}>
        Setiap Hari Selasa dan Hari jumat Bersama Ustadz Muslim Bahar, S.Pd.I,
        M.Pd. dan Ustadz Khaerul Ikhsan, S.TH.I yang kesemuanya dilanjutkan
        dengan sarapan bersama.
      </KegiatanBox>
      <KegiatanBox title={'Makan bersama'} dummy>
        setiap malam Jumat yang dilanjutkan dengan pengajian rutin (Liqo)
        bersama Komunitas Pejuang Subuh.
      </KegiatanBox>
      <KegiatanBox title={'Program Jumat Berkah'}>
        makan bersama setiap selesai Sholat Jumat dalam bentuk prasmanan
      </KegiatanBox>
      <KegiatanBox title={'Sedia kopi, teh, air minum gratis'}>
        Masjid Menyiapkan kopi, teh, air minum gratis (seduh sendiri), layanan
        wifi gratis.
      </KegiatanBox>
      <KegiatanBox title={'Bantuan sosial'}>
        Bantuan sosial kepada jamaah dan warga yang membutuhkan.
      </KegiatanBox>
      <KegiatanBox title={'Layanan Mobil Ambulance gratis'}>
        Masjid menyediakan layanan mobil ambulance gratis, dengan harapan dapat
        membantu masyarakat di
      </KegiatanBox>
    </div>
  );
};

export default Index;
