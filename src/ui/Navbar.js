import {Link, useMatch, useResolvedPath} from "react-router-dom"
import sauronGif from "../images/eyeOfSauron.gif"

export default function Navbar() {
    return (
        <nav className="nav">
            <div><img className="navGif" src={sauronGif} alt="sauronGif"/></div>
            <ul>
                <CustomLink to="/">The Hobbit</CustomLink>
                <CustomLink to="/lotr">The Lord of the Rings</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const activePage = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={activePage ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}