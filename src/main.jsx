import { h, render } from 'preact'
import Router from 'preact-router';
import './app.css'

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

console.log("Happy 2024!");
render(<Main />, document.getElementById('app'))
// render(<Main />, document.body);
