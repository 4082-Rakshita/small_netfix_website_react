import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import"./index.css";
import Sdata from "./Sdata";

// function ncard(val){
//   console.log(val);
//   return(
//     <Card
//     imgsec={val.imgscr}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//     />
//   )
// }
ReactDOM.render(
<>
<h1 className="heading_style">LIST OF TOP FIVE NETFLIX SERIES</h1>
{Sdata.map((val,index) => {
  console.log(index);
  return(
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )
})
}
</>,
document.getElementById('root')
);
