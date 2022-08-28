import Image from 'next/image';import { useState, useEffect } from 'react';
const Index = (props) => {
  const { iteration } = props;
  const stringifyData = (data) => JSON.stringify(data);
  const initialData = stringifyData({ data: null });
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const fetchData = () => {
      const uri = 'https://picsum.photos/v2/list';
      fetch(uri)
        .then((res) => res.json())
        // debugger
        // .then((res) => {
        //   console.log(res[].url);
        // })
        .then(() => {
          const { id, download_url } = result[0];
          const dataVal = stringifyData({
            id,
            download_url,
          });
          setData(dataVal);
          console.log(dataVal);
        });
    };
    fetchData();
  }, []);

  return (
    <div className=" w-[300px] h-[470px] bg-white">
      {/* <Image src={data.download_url} alt={data.id} /> */}
      <div>test</div>
    </div>
  );
};

export default Index;
