import React, { Component } from 'react';
import style from './Widgets/videoList.css';
import { Link } from 'react-router-dom';


const VideoListTemplate = (props) => {
  return (
    props.data.map((item, i) => (
       <Link to={`/videos/${item.id}`} key={i} >
        <div className={style.videoListItem_wrapper}>
          <div className={style.left}
            style={{background:`url(/images/videos/${item.image})`}}>
        <div></div>
        </div> 
        <div className={style.right}>
          <h2> {item.title}</h2>
          </div>
        </div>
      </Link>
    ))
  )
}

export default VideoListTemplate;
