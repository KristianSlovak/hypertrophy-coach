'use client';

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const Home = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.SERVER_SIDE_PROXY + '/')
        const responseData = await res.json()
          setData(responseData.message);
      } catch (err) {
        console.log(err)
      }
    };
    fetchData();
  }, [data]);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
};

export default Home;