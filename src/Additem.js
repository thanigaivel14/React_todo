import React from 'react';
import { useRef ,useEffect} from 'react';
const Additem = ({newItem,setnewItem, handlesubmit}) => {
    const inpref=useRef();
    return (
    <form onSubmit={(e)=> handlesubmit(e)}> 
        <input type='text' htmlFor="addItem"
        ref={inpref}
        id='addItem' placeholder='Add item' value={newItem}
        onChange={(e)=>setnewItem(e.target.value)} 
        required
        autoFocus/>
        <button id='submit' type='submit'  onClick={()=>inpref.current.focus()}>  ADD</button>
    </form>
    );
}

export default Additem;
