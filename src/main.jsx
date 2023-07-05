import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Maps} from "./Maps";
import './index.css';
import './Landing.css';
import Home from './Home';
import {Create} from './Create';
import {Read} from './Read';
import {Update} from './Update';

import { ListAll } from './ListAll';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>  
      <Routes>
        <Route path = "/" element = {<Home />}>
        <Route path = "maps/:id" element = {<Maps />} />
    
        <Route path = "create" element = {<Create />} />
        <Route path = "read/:id" element = {<Read />} />

        <Route path = "listall" element = {<ListAll />} />
        <Route path = "update/:id" element = {<Update />} />
        
        </Route>
      </Routes>
    </BrowserRouter>


);