import logoImage from '../../src/assets/images/logoMosqueText.svg';import Image from 'next/image';
import Link from 'next/link';
export default function Header(props) {
  const { active } = props;
  const menus = ['Home', 'Kegiatan', 'Pengelola', 'Kontak'];
  return (
    <div className="py-[25px] flex items-center justify-center lg:justify-between">
      <div className="">
        <Link href={'/'}>
          <Image
            className="cursor-pointer brightness-0 hover:brightness-100 transition-all"
            src={logoImage}
            alt="Logo here"
          />
        </Link>
      </div>
      <div>
        <ul className="flex">
          {menus.map((menu) => {
            return (
              <li
                className={`z-10 hidden text-white lg:block ml-[63px] ${
                  menu === active ? 'font-semibold' : ''
                }`}
                key={menu}
              >
                <Link href={`${menu == 'Home' ? '/' : `/${menu}`}`}>
                  {menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
