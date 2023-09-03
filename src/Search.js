import React from 'react';

const Search = ({search,setsearch}) => {
    return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input id='search' value={search} onChange={(e)=>setsearch((e.target.value))}role='search' htmlFor="search" placeholder='Search' type='text'/>


        </form>
    );
}

export default Search;
