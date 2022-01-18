import React from 'react';
import TopBar from '../components/topbar/TopBar';
import Feed from '../components/feed/Feed';
import Sidebar from '../components/sidebar/Sidebar';
import Rigth from '../components/rigth/RIgth';

const Home = () => {
  return (
    <>
     <TopBar/>
     <div className = 'home-container'>
     <Sidebar/>
      <Feed/>
      <Rigth/>
     </div>
    </>
  );
}

export default Home;
