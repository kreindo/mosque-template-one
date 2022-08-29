import Image from 'next/image';
import { useState, useEffect } from 'react';
const Index = (props) => {
  const { iteration } = props;
  const initialData = { data: null };
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
        .then((res) => {
          const { id, download_url } = res[2];
          const dataVal = {
            id,
            download_url,
          };
          setData(dataVal);
        });
    };
    fetchData();
    console.log(data);
    console.log(data.download_url);
  }, []);

  return (
    <div className="flex items-center w-[300px] h-[470px] rounded-[10px] mr-[20px] bg-white relative">
      <Image
        className="rounded-[10px]"
        src={data.download_url}
        alt={data.id}
        layout={'fill'}
        objectFit={'cover'}
      />
    </div>
  );
};

export default Index;
