import Image from 'next/image';
import MosqueLogoSvg from '../../src/assets/images/logoMosqueText.svg';
import Link from 'next/link';
export default function Header(props) {
  const { active } = props;
  const menus = ['Home', 'Kegiatan', 'Pengelola', 'Kontak'];
  return (
    <div className="py-[25px] flex items-center justify-center lg:justify-between">
      <div className="">
        <Link href={'/'}>
          <Image
            className="cursor-pointer brightness-100 hover:brightness-125 transition-all"
            src={MosqueLogoSvg}
            alt="Logo here!"
          />
        </Link>
      </div>
      <div>
        <nav>
          <ul className="flex">
            {menus.map((menu) => {
              return (
                <li
                  className={`z-10 hidden text-white lg:block ml-[63px] ${
                    menu === active ? 'font-semibold' : ''
                  }`}
                  key={menu}
                >
                  <Link href={`${menu == 'Home' ? '#' : `#${menu}`}`}>
                    {menu}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
