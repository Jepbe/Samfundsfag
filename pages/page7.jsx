import Navbar from "components/navabr";
import style from '/../styles/modules/page1.module.scss'


export default function Page1() {
    return(
    <>
        <Navbar/>
        <video className={style.video} height="100%" width="100%" autoPlay muted loop> 
            <source src='http://localhost:3000/assets/NewArmaVideo.mp4' type='video/mp4' />
        </video>

        <body className={style.mainOuter}>
            <div className={style.main}>
                <div>
                  <h1>Droners formål</h1>
                    <h4>Militære droner har typisk 2 formål.</h4>
                        <ul className={style.mainList}>
                            <li>Overvågningsmissioner</li>
                            <li>Bevæbnede missioner, hvor dronerne udstyres med missiler og bomber.</li>
                        </ul>
                </div>
            </div>
        </body>
    </>   
    )
}