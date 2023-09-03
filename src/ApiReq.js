const ApiReq=async(url='', optionob=null,errmsg=null)=>{
    try{
        const response= await fetch(url,optionob);
        if(!response.ok) throw Error ("please reload the app");
    }
    catch(err){
        errmsg=err.message;

    }
    finally{
        return errmsg;

    }

};

export default ApiReq;