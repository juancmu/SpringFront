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
import {Update} from './Update';
import {Delete} from './Delete';
import { ListAll } from './ListAll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>  
      <Routes>
        <Route path = "/" element = {<Home />}>
        <Route path = "maps/:id" element = {<Maps />} />
        <Route path = "create" element = {<Create />} />
        <Route path = "read" element = {<Read />} />

        <Route path = "listall" element = {<ListAll />} />
        <Route path = "update/:id" element = {<Update />} />
        <Route path = "delete/:id" element = {<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>


);