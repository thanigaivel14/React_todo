import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import './index.css';
import { useState } from "react";
import Additem from "./Additem";
import Search from "./Search";
import { useEffect } from "react";
import ApiReq from "./ApiReq";

function Todo(){
    const API_URL="http://localhost:3500/items";
    const[items,setItem]=useState([]); 
    const [search,setsearch]=useState('');
    const [fetcherror,setfetcherror]=useState(null);
    const [loading,setloading]=useState(true);
    const handclick= async(id)=>{
        const updatedList = items.map((item) =>item.id===id?{...item,checked:!item.checked}:item);
        setItem(updatedList);
        const changechech=updatedList.filter((item)=>item.id===id);
        const updateoption={
            method:'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({checked:changechech[0].checked})
        };
        const reurl=`${API_URL}/${id}`;
        const result= await ApiReq(reurl,updateoption);

    }
    const submit= async(item)=>{
        const id=items.length?items[items.length-1].id+1:1;
        const adit={id,checked:false,item};
        const newarr=[...items,adit];
        setItem(newarr);
        const postoption={
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(adit)
        };
        const result= await ApiReq(API_URL,postoption);
        

    }
    useEffect(()=>{
        const fetchitem=async()=>{
            try{
                const response=await fetch(API_URL);
                if(!response.ok) throw Error ("Data not recived");
                const Listitem=await(response.json());
                setItem(Listitem);
                setfetcherror(null);
            }
            catch(error){
                setfetcherror(error.message);

            }
            finally{
                setloading(false);
            }
            
        }
        setTimeout(()=>{
            (async()=>await fetchitem())();
        },2000)
       

    },[]);
    const[newItem,setnewItem]=useState('');
    const handlesubmit=(e)=>{
        e.preventDefault();
        submit(newItem);
        setnewItem(''); 
    }
    const handledelete = async(id) => {
        const updatedList = items.filter((item) => item.id !== id);
        setItem(updatedList);
        const reurl=`${API_URL}/${id}`;
        const deleteoption={method:'DELETE'};
        const result= await ApiReq(reurl,deleteoption);
             
      };

       
    return(
        <>
        <Header/>
        <Additem  newItem={newItem} setnewItem={setnewItem} handlesubmit={handlesubmit}/>
        <Search search={search} setsearch={setsearch}/>
       <main>
        {loading && <p> loading THE DATA...</p>}
        {fetcherror && <p>{ `ERROR:${fetcherror}`}</p>}
        {!loading &&
        <Body  item={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))} handclick={handclick} handledelete={handledelete}/>}</main>
        <>{!loading && fetcherror&&
        <Footer item={items} length={items.length}/>}
        </>
        </>
    )
}
export default Todo;
// npx json-server -p 3500 -w .\data\db.json