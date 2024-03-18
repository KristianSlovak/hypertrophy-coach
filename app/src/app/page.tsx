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
    console.log('hello')
    fetchData();
  }, []);

  return (
    <div>
      <p>{data}</p>
    </div>
  )
};

export default Home;