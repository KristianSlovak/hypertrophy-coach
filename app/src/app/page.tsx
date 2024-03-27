'use server'

import Link from 'next/link';
import './page.css';

type User = {
  id: number;
  name: string;
};

const Home = () => {

  return (
  <div className="container">
    <div className='h1Div'>
    <h1 className="welcomeH1">Welcome to the</h1>
    <h1 className="welcomeH1">Hypertrophy Coach app</h1>
    </div>
    <div className='h2Div'>
    <h2 className="homeH2">This app serves as helper with tracking workouts and progress. 
      </h2>
      <h2 className='homeH2'>Aditionaly I plan to add feature for the app to recomend next training for user based on feedback.</h2>
    </div>
      <Link href={'/login'} className='homeButton'>Start</Link>
    </div>)

};

export default Home;