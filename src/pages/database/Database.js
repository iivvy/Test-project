import "./database.css";
import NavBar from '../../componenets/NavBar';
import datatable from "../../componenets/datatable/datatable";
import React  from 'react';
import TopBar from '../../componenets/TopBar';


const Database =() => {
    return(
        <div className ='db'>
            <NavBar />
            <div className='dbContainer'>
                <TopBar/> 
                <hr/>
                <datatable />
                
            </div>
           
        </div>
        
    )



}
export default Database