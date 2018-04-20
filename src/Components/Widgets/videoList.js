import React, { Component } from 'react';
import style from './videoList.css';
import axios from 'axios';
import { URL } from '../../config.js';
import Button from './buttons';
import VideosTemplate from '../videoTemplate';

class VideoList extends Component {
  state = {
    teams:[],
    videos:[],
    start: this.props.start,
    end:this.props.start + this.props.amount,
    amount: this.props.amount
  }

componentWillMount(){
  this.request(this.state.start, this.state.end);
}

  request = (start, end) => {
    if(this.state.teams.length < 1){
      axios.get(`${URL}/teams`)
      .then(res => {
        this.setState({
          teams:res.data
        })
      })
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
    .then(res => {
      this.setState({
        videos:[...this.state.videos, ...res.data],
        start,
        end
      })
    })
  }
  loadMore = () => {
    let end = this.state.end + this.state.start;
    this.request(this.state.start, end);
  }

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case ('card'):
        template = <VideosTemplate data={this.state.videos} teams={this.state.teams}/>
        break;
      default:
        template = null;

    }
    return template;
  }

  renderTitle = () => {
    return this.props.title ?
    <h3><strong>NBA</strong> Videos </h3> : null ;
  }

  renderLoadMore= () => {
    return this.props.loadmore ?
    <Button type='loadmore' cta="Load More Videos"   loadMore={()=>this.loadMore()} /> : <Button type='linkTo' cta="More Videos" linkTo="/videos" />
  }

  render(){
    return(
      <div className = {style.videoList_wrapper}>
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderLoadMore()}
      </div>
    )
  }
}

export default VideoList;
