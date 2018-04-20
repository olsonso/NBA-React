import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../../config.js';
import style from './newList.css';

class NewsList extends Component {
state = {
  item: [],
  start: this.props.start,
  end:this.props.start + this.props.amount,
  loadmore: this.props.loadmore,
  amount: this.props.amount
}

componentWillMount(){
  this.request(this.state.start, this.state.end);
}

  request =(start, end) => {

  axios.get(`${URL}/articles/?_start=${start}&_end=${end}`)
  .then(res => {
    this.setState({
      item:[...this.state.item, ...res.data]
      })
    })
}

renderNews = (type) => {
  let template = null;

  switch (type) {
    case ('card'):
      template= this.state.item.map((item, i) => (
        <div key = {i} >
        <div className = {style.newList_item} >
          <Link to={`/articles/${item.id}`}>
            <h2> {item.title}</h2>
           </Link>
        </div>
      </div>
    ))
      break;
    default:
      template = null;
  }

  return template;
}

loadMore = () => {
  let end = this.state.end + this.state.amount;
  this.request(this.state.end, end);
  }

  render(){
    return(
      <div> {this.renderNews(this.props.type)}
        <div onClick={()=>this.loadMore()}>
          LOADMORE
        </div>
      </div>
    )
  }
}

export default NewsList;
