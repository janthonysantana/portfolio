import './footer.css'
import { Link } from 'preact-router/match'

export const Footer = () => {
    return (
        <footer>
            <p>Reach out or follow me @</p>
            <ul class="footer-list">
                <Link activeClassName='active' href='https://github.com/janthonysantana'><li title="Github"><iconify-icon icon="mdi:github"></iconify-icon></li></Link>
                <Link activeClassName='active' href='https://www.linkedin.com/in/anthony-santana-ny/'><li title="LinkedIn"><iconify-icon icon="mdi:linkedin"></iconify-icon></li></Link>
                <Link activeClassName='active' href='https://medium.com/@janthonysantana'><li title="Medium"><iconify-icon icon="ri:medium-fill"></iconify-icon></li></Link>
                <Link activeClassName='active' href='https://mastodon.social/@jasantana'><li title="Mastodon"><iconify-icon icon="mdi:mastodon"></iconify-icon></li></Link>
                <Link activeClassName='active' href='https://discord.com/users/jasantana_dev'><li title="Discord"><iconify-icon icon="ic:baseline-discord"></iconify-icon></li></Link>              
            </ul>
        </footer>
    )
}