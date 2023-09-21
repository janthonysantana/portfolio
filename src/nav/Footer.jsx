import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <p>Reach out or follow me @</p>
            <ul class="footer-list">
                <li><iconify-icon icon="mdi:github"></iconify-icon></li>
                <li><iconify-icon icon="mdi:linkedin"></iconify-icon></li>
                <li><iconify-icon icon="ri:medium-fill"></iconify-icon></li>
                <li><iconify-icon icon="mdi:mastodon"></iconify-icon></li>
                <li><iconify-icon icon="ic:baseline-discord"></iconify-icon></li>
            </ul>
        </footer>
    )
}