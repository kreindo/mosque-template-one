import Header from '../Header';
import Head from 'next/head';
import Footer from '../Footer';
import Image from 'next/image';
import Intersect from '../../src/assets/images/Intersect.svg';
import Swirl1 from '../../src/assets/images/path.png';
import Swirl2 from '../../src/assets/images/path2.png';
const Layout = (props) => {
  const { children, title, active } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className="relative min-h-full mx-auto max-w-screen-2xl">
        <div className="hidden absolute lg:block right-[-700px] lg:top-0 lg:right-0 z-[0]">
          <Image src={Intersect} alt={'Intersect cube'} />
        </div>
        <div className="hidden absolute lg:block top-[150px] right-[300px] z-[0]">
          <Image src={Swirl1} alt={'swirly svg'} />
        </div>
        <div className="hidden absolute lg:block top-[220px] right-[800px] z-[0]">
          <Image src={Swirl2} alt={'swirly svg'} />
        </div>
      </div>
      <div className="mx-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        <Header active={active} />
        {children}
      </div>
      <div className="bg-warna-primary-maroon">
        <div className="mt-[100px] mx-auto sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
