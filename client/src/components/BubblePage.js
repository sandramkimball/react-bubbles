import React, {useState, useEffect} from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utilis/axiosWithAuth";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // const logout = e => {
  //   localStorage.removeItem('token'); 
  //   props.history.push('/')
  // }
  useEffect(()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(res=> {setColorList(res.data)})
    .catch(err=> console.log(`No damn colors still`, err))
  }, [colorList.length])
    return (
      <>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />  
      </>
    );
};

export default BubblePage;