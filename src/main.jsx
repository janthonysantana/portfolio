import { createRoot } from 'react-dom/client';
import './app.css'

import { Link, Route, Switch } from "wouter";
import { Home } from './pages/Home.jsx'
import { AboutMe } from './pages/AboutMe.jsx'
import { Projects } from './pages/Projects.jsx'
import { Header } from './nav/Header.jsx'
import { Footer } from './nav/Footer.jsx'
// import Home from './pages/Home'

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Home/>
                <AboutMe/>
                <Projects/>
            </main>
            <Footer />
        </>
    )
}

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app'));
root.render(<Main />);