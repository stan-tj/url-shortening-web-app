import { linkList } from "./data"

const Nav = () => {
    return (
        <nav className='nav'>
            {/* Nav list - containing the logo and nav links */}
            <ul className="nav__list">

                {/* Logo */}
                <li className="logo">
                    <img src="/logo.svg" alt="Shortly logo" width={121} height={33} />
                </li>

                {/* Rendering nav links */}
                {
                    linkList.map(link => (
                        <li className="nav__item" key={link.name}>
                            <a href={link.link} className="nav__link">{link.name}</a>
                        </li>
                    ))
                }
            </ul>

            {/* Nav CTAs - containing the call to action buttons */}
            <ul className="nav__ctas">
                <li className="login">
                    <button>Login</button>
                </li>
                <li className="signup">
                    <button>Sign up</button>
                </li>

            </ul>
        </nav>
    )
}

export default Nav