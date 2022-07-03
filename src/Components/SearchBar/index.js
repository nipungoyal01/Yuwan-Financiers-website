import React,{useState} from 'react'
import './style.css'

function SearchBar() {
   
const[search,setSearch]=useState(false);

   const submitSearch = (e)=>{
    e.preventDefault();
    alert('Searched');
   }

   const OpenSearch=(e)=>{ 
       setSearch(true);
   }

   const searchclass= search?'search active':'search';

    return (
        <div className="Search_bar section-padding">
        <form className="Search_Form" onSubmit={submitSearch}>
        <input className={searchclass} type="text" placeholder="Search.." />
        <i onClick={OpenSearch} className="search-icon" className="fas fa-search"></i>
        </form>
            
        </div>
    )
}

export default SearchBar
