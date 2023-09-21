import './header.css';
import { Link } from 'preact-router/match'

export const Header = () => {
    const host = window.location.host;

    return (
        <header>
            <Link activeClassName='active' href='/'><h1>J Anthony Santana</h1></Link>
        </header>
    )
}