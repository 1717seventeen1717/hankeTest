import React from 'react';
import './App.css';
import PictureSelect from './PictureSelect';
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.updateState= this.updateState.bind(this);
    this.state={
      values:[]
    }
    this.pictures=[{
      id: '1',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },]
  }
  updateState = (endValue) => {
    this.setState({
      values: endValue
    },()=>{
      console.log(this.state.values);
    })
  }
  render(){
    const {values} = this.state;
    return(
      <div className="App">
        <PictureSelect pictures={this.pictures} values={values} onChange={(endValue)=>this.updateState(endValue)}/>
    </div>
    )
  }
}

