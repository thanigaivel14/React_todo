import React from 'react';

function Footer({ item, length }) {
  let count=0;
  for (let i=0;i<item.length;i++){
   if( item[i].checked===false){
    count=count+1;
   }
  }
  return (
    <footer>
       {length === 1 ? 'Total works' : 'Total Work'} {length}  {count===0?<span> and All work completed</span>: <span> and Reaming {count}</span>}       
    </footer>
  );
}

export default Footer;
