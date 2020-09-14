import React, { useState, useEffect } from "react";
import fetchColor from '../components/FetchColor';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(()=>{
   fetchColor().then(colors=>{
      setColorList(colors);
    }).catch(err=>{
      console.log(err);
    });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;