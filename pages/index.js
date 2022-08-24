// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export default function App() {
  return (
    <>
      {/* <div>test</div> */}
      <Layout title={App}>
        <Hero />
        <div>test</div>
      </Layout>
    </>
  );
}
