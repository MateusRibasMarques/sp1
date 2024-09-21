import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Blog from './Pages/Blog/Blog'
import Grupos from './Pages/Grupos/Grupos'

import Login from  './Pages/Login/Login'
import Cadastro from  './Pages/Cadastro/Cadastro'
import Eventos from  './Pages/Eventos/Eventos'
import CreateEvento from  './Pages/CreateEvento/CreateEvento'


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/grupos' element={<Grupos />}></Route>
                    {/* <Route path='/vagas' element={<Vagas />}></Route> */}
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/cadastro' element={<Cadastro />}></Route>
                    <Route path='/eventos' element={<Eventos />}></Route>
                    <Route path='/criareventos ' element={<CreateEvento />}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
