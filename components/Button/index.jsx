const Index = (props) => {
  const { name, className, link } = props;
  return (
    <>
      <a href={link}>
        <button className={className}>{name}</button>
      </a>
    </>
  );
};

export default Index;
