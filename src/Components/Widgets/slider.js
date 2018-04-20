import React, {Component} from 'react';
import axios from 'axios';
import SliderTemplates from './sliderTemplates';
import { URL } from '../../config.js';

class NewsSlider extends Component {

  state = {
    news:[]
  }

  componentWillMount(){
    axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
    .then(res => {
      this.setState({
        news:res.data
      })
    })
  }

  render(){

    return(
      <div>
        <SliderTemplates type={this.props.type} data ={this.state.news}  settings={this.props.settings}/>
      </div>
    )
  }
}
export default NewsSlider;
