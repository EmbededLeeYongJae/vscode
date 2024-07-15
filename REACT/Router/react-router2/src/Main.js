import './css/Main.css';
import Header from './sub/Header';
import Nav from './sub/Nav';
import Footer from './sub/Footer';
import Home from './sub/Home';
import Javascript from './sub/Javascript.js';
import JavascriptSub from './sub/JavascriptSub.js';
import Typescript from './sub/Typescript';
import NotFound from './sub/NotFound';
import React from './sub/React';

export default function Main(){
    return(
        <div id='wrapper'>
            <Header />
            <Nav />
            <Footer />
        </div>
    );
}