import NextLink from 'next/link'
import style from '../../styles/modules/Navbar.module.scss';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useState } from 'react';


export default function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    return(
        <>
             {/* Top nav bar */}
        <nav className={style.Navbar}>
            {/* <h1>LOGO</h1> */}
            <img src="/assets/DRONER_I_KRIG_logo.png" alt="Droner i krig logo" className={style.Logo} />
            <button className={style.burgerMenu} onClick={handleSidebar}><HiMenuAlt3 /></button>
        </nav>


        {/* Right side bar */}
    <div>
    <div className={sidebar ? style.overlay : style.overlay2} onClick={handleSidebar}></div>
        <div className={sidebar ? style.sideBarInner : style.sideBarInnerHidden}>
            <button onClick={handleSidebar}><HiOutlineX /></button>
            <ul className={style.sidebarList}>  
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem}>
                            Home
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="../Page1">
                        <a className={style.sideaBarItem2}>
                            Droners formål
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem2}>
                            Page 2
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem2}>
                            Test
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem2}>
                            Test
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem2}>
                            Test
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/">
                        <a className={style.sideaBarItem2}>
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