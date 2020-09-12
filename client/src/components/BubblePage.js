import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import AddForm from '../components/AddForm';


import {axiosWAuth} from '../utils/axiosWAuth'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [ isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axiosWAuth()
    .get("/colors")
      .then((response) => {
        console.log(response)
        setColorList(response.data)
        setIsLoaded(true)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    isLoaded
    ? 
    <div>
      <AddForm />
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div> 
    : <div> Getting Colors ... </div>
  );
};

export default BubblePage;