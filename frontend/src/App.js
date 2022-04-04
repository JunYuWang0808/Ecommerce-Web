import './App.css'

import Header from './components/Header.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.js'

import {Container} from 'react-bootstrap'
import './bootstrap.min.css'
import HomeScreen from "./screens/HomeScreen"

import ProductScreen from "./screens/ProductScreen";
function App() {
  return (
        <BrowserRouter>
            <Header/>
            <main className={'py-3'}>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/product/:id" element={< ProductScreen/>}/>
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
