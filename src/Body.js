import React from 'react';
import './index.css';
function Body({item,handclick,handledelete }) {
  
  return (
    <div className='container'>
    {(item.length)?(
   
      <ul className='list'>
       {item.map((item)=>(
        <li key={item.id} className="item">
          <input type="checkbox"  checked={item.checked}  onChange={()=>handclick(item.id)}/><label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>{handclick(item.id)}} >{item.item}</label>
          <button onClick={()=>{handledelete(item.id)}}>delete</button>
        </li>
       ))}
      </ul>
    ):(
        <p style={{display:'flex',marginTop:'10%',justifyContent:"center"}} >your list is empty</p>
    )
      }
    </div>
  );

}


export default Body;
