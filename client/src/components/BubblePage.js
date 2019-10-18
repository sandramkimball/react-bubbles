import React from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utilis/axiosWithAuth";

class BubblePage extends React.Component {
  state={
    colorList: []
  };

 componentDidMount(){
    this.getData();
  }

  getData=() => {
    axiosWithAuth()
    .get('/api/colors')
    .then(res=> {console.log('COLORS!!:', res.data)
    const newColorList = res.data;
    this.setState({colorList: newColorList})
  })
    .catch(err=>{console.log('NOOO COLORS!!:', err.response)})
  }

  render(){
    return (
      <>
        <ColorList updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </>
    );
  }
};

export default BubblePage;