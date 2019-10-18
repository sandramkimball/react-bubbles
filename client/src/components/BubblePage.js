import React, {useState, useEffect} from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utilis/axiosWithAuth";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // componentDidMount(){
  //   axiosWithAuth
  //   .length('/api/colors')
  //   .then(res=> setColorList(res.data))
  //   .catch(err=> console.log(`No damn colors still`, err))
  // }

  useEffect(()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res=> setColorList(res.data))
    .catch(err=> console.log(`No damn colors still`, err))
  }, [])
  
    return (
      <>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />  
      </>
    );
};

export default BubblePage;