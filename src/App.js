import React from 'react';
import { render } from "react-dom";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Cours from './pages/Cours/Cours';
import Single from './pages/Cours/Single'
import New from './pages/Cours/New'

import Database from './pages/database/Database';


function app(){
    return(
        <div className='App'>
           <BrowserRouter>
           <Routes>
              <Route path="/" >
                 <Route index element={<Home/>}/>
                 <Route path="Login" element={<Login></Login>}/>
                 <Route path="Cours">
                     <Route index element={ <Cours/>}/>
                     <Route path=":CoursId" element={<Single/>}/>
                     <Route path="new" element={<New/>}/>
                 </Route>
                 <Route path="Base de donnee">
                     <Route index element={<Database />}/>
                 </Route>
                 
                     
               

               </Route>
          
        </Routes>
      </BrowserRouter>

        </div>
        
    )
}
export default app;