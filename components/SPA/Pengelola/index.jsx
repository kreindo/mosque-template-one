import PageTemplate from '../../../components/PageTemplate';
import { PengelolaBox } from '../../PengelolaBox';
const Index = ({ id }) => {
  return (
    <div id={id}>
      <PageTemplate title={"Kepengurusan Masjid Al-Mu'awanah"}>
        Tugas pokok pengurus masjid adalah memakmurkan masjid. Karenanya,
        pengurus masjid disebut ‘Takmir Masjid’ atau yang lebih dikenal dengan
        Dewan Kemakmuran Masjid (DKM). Pun, tidak dipungkiri, bahwa masjid juga
        sebuah organisasi. Sebagai lembaga yang sangat sentral dalam kehidupan
        masyarakat Muslim, sudah seharusnya bila masjid dikelola dengan
        sebaik-baiknya. Agar tujuan ‘memakmurkan masjid’ dapat tercapai. Hal
        inilah yang menjadi motivasi bagi pengurus masjid Al-Muawanah
        Terang-Terang Bulukumba yang terus memanjakan jamaahnya dengan berbagai
        program dan fasilitas yang disiapkan.
        <PengelolaBox
          name={'Drs.H.Najamuddin,M.Pd.I'}
          occupation={'Ketua'}
        ></PengelolaBox>
        <PengelolaBox
          name={'Drs.H.Muh.Djabir Beddu, M.Pd.I'}
          occupation={'Wakil Ketua'}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta
          qui dolores nemo autem? Impedit quos autem voluptas labore nihil?
        </PengelolaBox>
        <PengelolaBox name={'Drs.Mardianto,MM.Pd'} occupation={'Sekretaris'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta
          qui dolores nemo autem? Impedit quos autem voluptas labore nihil?
        </PengelolaBox>
        <PengelolaBox name={'H.Darmawan Sonda, SE'} occupation={'Bendahara'}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At soluta
          qui dolores nemo autem? Impedit quos autem voluptas labore nihil?
        </PengelolaBox>
      </PageTemplate>
    </div>
  );
};

export default Index;
