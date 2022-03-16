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
                    <NextLink href="../page1">
                        <a className={style.sideaBarItem2}>
                            Droners formål
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/page2">
                        <a className={style.sideaBarItem2}>
                            Hvilke typer droner findes der?  
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/page3">
                        <a className={style.sideaBarItem2}>
                        Er det i orden at bruge droner? 
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/page4">
                        <a className={style.sideaBarItem2}>
                        Hvor mange lande bruger droner?
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/page5">
                        <a className={style.sideaBarItem2}>
                           Hvordan kæmper droner?
                        </a>
                    </NextLink>
                </li>
                <li onClick={handleSidebar}>
                    <NextLink href="/page6">
                        <a className={style.sideaBarItem2}>
                        Hvad bruger militære droner til?
                        </a>
                    </NextLink>
                </li>
            </ul>
        </div>
    </div>

        </>
    );
}