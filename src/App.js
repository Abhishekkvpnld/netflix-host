import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import ActionMovie from './components/RowPost/ActionMovie';
import PopularMovie from './components/RowPost/PopularMovie';
import TvShows from './components/RowPost/TvShows';
import UpcomingMovie from './components/RowPost/UpcomingMovie';
import Footer from './components/footer/footer';
import { Top_Rated,Upcoming,Now_Playing,Popular, TV_Shows } from './urls/url';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={Top_Rated} title={'Netflix Originals'} />
      <ActionMovie url={Now_Playing} title={'Action'} />
      <UpcomingMovie url={Upcoming} title={'Upcoming'}/>
      <PopularMovie  url={Popular} title={'Popular'} />
      <TvShows url={TV_Shows} title={'TV Shows'}/>
      <Footer/>
    </div>
  );
}

export default App;
