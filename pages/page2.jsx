import Navbar from "./components/navabr";
import style from './../styles/modules/Page1.module.scss'


export default function Page1() {
    return(
    <>
        <Navbar/>
        <video className={style.video} height="100%" width="100%" autoPlay muted loop> 
            <source src='https://samfundsfag.vercel.app/assets/NewArmaVideo.mp4' type='video/mp4' />
        </video>

        <body className={style.mainOuter}>
            <div className={style.main}>
                <div>
                  <h1>Hvilke typer droner findes der?</h1>
                    <h4>I Danmark har vi ikke Unmanned combat aerial vehicle (UCAV)</h4>
                    <img src="https://samfundsfag.vercel.app/assets/UCAV.jpeg" alt="" />
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