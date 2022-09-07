import Link from 'next/link';const Index = (props) => {
  const { name, className, link } = props;
  return (
    <>
      {link === '/Kontak' ? (
        <Link href={'/Kontak'}>
          <button className={className}>{name}</button>
        </Link>
      ) : (
        <a target={'_blank'} rel="noreferrer" href={link}>
          <button className={className}>{name}</button>
        </a>
      )}
    </>
  );
};

export default Index;
