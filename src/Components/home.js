import React from 'react';
import NewsSlider from './Widgets/slider';
import NewsList from './Widgets/newsList';
import VideoList from './Widgets/videoList';

const Home = () => {
  return(
    <div>
      <NewsSlider type="news" start={0} amount={4} settings={{
          dots:false
        }}/>
      <NewsList
        type='card'
        loadmore = {true}
        start ={2}
        amount={3} />

      <VideoList
        type='card'
        title={true}
        loadmore={true}
        start={0}
        amount={3}
        />
    </div>
  )
}

  export default Home;
