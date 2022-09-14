import {
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
  FaWhatsapp,
} from 'react-icons/fa';
import Image from 'next/image';
export const PengelolaBox = ({
  name,
  occupation,
  children,
  facebook,
  instagram,
  twitter,
  whatsapp,
  facebookLink,
  instagramLink,
  twitterLink,
  whatsappLink,
}) => {
  return (
    <div className="shadow-lg mt-[50px]  shadow-gray-400 m-auto w-[300px] sm:w-[700px]">
      <div className="flex flex-col justify-center  gap-10">
        <div className="pt-10 pr-10 pb-10 pl-10 sm:px-0 sm:py-0 flex flex-col items-center w-[300px] sm:flex-row sm:w-[700px]">
          <div className="relative w-[200px] h-[200px] sm:max-w-[150px] sm:min-w-[150px] sm:h-[280px]">
            <Image
              className="rounded-full sm:rounded-none"
              src={'https://picsum.photos/id/233/400/400?grayscale'}
              alt={'image'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className="flex flex-col sm:min-w-[550px] pt-5 sm:py-10 sm:px-10">
            <div className="flex flex-col items-center justify-center sm:items-start">
              <h1 className="text-md text-gray-500">{occupation}</h1>
              <h1 className="text-center sm:text-start text-lg font-bold">
                {name}
              </h1>
            </div>
            <div className="mb-10">
              <p className="text-center sm:text-start">{children}</p>
            </div>
            <div className="flex justify-around sm:justify-start items-center sm:gap-[48px]">
              {facebook == true ? (
                <a href={facebookLink}>
                  <FaFacebookSquare size={24} />
                </a>
              ) : null}
              {twitter == true ? (
                <a href={twitterLink}>
                  <FaTwitter size={24} />
                </a>
              ) : null}
              {instagram == true ? (
                <a href={instagramLink}>
                  <FaInstagram size={24} />
                </a>
              ) : null}
              {whatsapp == true ? (
                <a href={whatsappLink}>
                  <FaWhatsapp size={24} />
                </a>
              ) : null}
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
