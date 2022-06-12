import { Link, useParams } from 'react-router-dom'
import './Header.css'

export default function Header() {

    // let params = useParams();
    // console.log(window.location.pathname.length);
    return (
        <>
            <header className="header">
                <div>
                    <Link to='/burger'>
                        <img src={require(`../../images/burger-logo.png`)} alt='burger logo' width='50' height='50' />
                    </Link>
                </div>
                <h2>Burger Builder App</h2>
                <ul className='header__menu'>
                    {/* {window.location.pathname && <li><Link to='/burger'>Log out</Link></li>} */}
                    <li>
                        <Link to="/burger">Home</Link>
                    </li>
                    <li>
                        <Link to="/burger/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/burger/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/burger/faq">FAQ</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}