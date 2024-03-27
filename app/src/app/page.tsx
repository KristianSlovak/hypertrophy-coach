'use client';

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

const Home = () => {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string| null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(process.env.SERVER_SIDE_PROXY || '');
        if(!res.ok) {
          throw new Error('Failed to fetch data.')
        }
        const responseData = await res.json()
        setData(responseData.message);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError('Error fatching data. Please try again.')

      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
      <h1>{data}</h1>
      )}
    </div>
  )
};

export default Home;