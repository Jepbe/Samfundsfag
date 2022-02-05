import NextLink from 'next/link'
import style from '../../styles/modules/Navbar.module.scss';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";


export default function Navbar() {
    return(
        <>
             {/* Top nav bar */}
        <nav className={style.Navbar}>
            <h1>LOGO</h1>
            <button className={style.burgerMenu}><HiMenuAlt3 /></button>
        </nav>


        {/* Right side bar */}
    <div>
    <div className={style.overlay}></div>
        <div className={style.sideBarInner}>
            <button><HiOutlineX /></button>
            <ul>  
                <li>
                    <NextLink href="/">
                        <a className={style.sideaBarItem}>
                            Test
                        </a>
                    </NextLink>
                </li>
            </ul>
        </div>
    </div>

        </>
    );
}