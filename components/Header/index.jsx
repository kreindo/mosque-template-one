import logoImage from '../../src/assets/images/logo.png';import Image from 'next/image';
import Link from 'next/link';
export default function Header(props) {
  const { active } = props;
  const menus = ['Home', 'Kegiatan', 'Pengelola', 'Kontak'];
  return (
    <div className="mx-[11%] flex items-center">
      <Image src={logoImage} alt="Logo here" />
      <div>
        <ul className="flex">
          {menus.map((menu) => {
            return (
              <li
                className={`mr-[63px] ${menu === active ? 'font-semibold' : ''}`}
                key={menu}
              >
                <Link href={`${menu == 'Home' ? '/' : `/${menu}`}`}>
                  {menu}
                </Link>
              </li>
            );
          })}
          {/* <li className="mr-[63px]">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="mr-[63px]">
            <Link href={'/Kegiatan'}>Kegiatan</Link>
          </li>
          <li className="mr-[63px]">
            <Link href={'/Pengelola'}>Pengelola</Link>
          </li>
          <li className="mr-[63px]">
            <Link href={'/Kontak'}>Kontak</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
