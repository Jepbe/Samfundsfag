import Navbar from "/components/navabr";
import style from '/../styles/modules/page1.module.scss'


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
                    <div className={style.siteHeader}>
                        <h1>Hvor mange lande bruger droner?</h1>
                    </div>
                        <div className={style.divForTextOnly}>
                        <p>
                        Omkring 70 lande er i besiddelse af dronerne. Om de faktisk bruger dem er en anden sag. Det afhænger af den konkrete situation, hvor man vil vurdere, om det, at indsætte dronen, kan afhjælpe det ene eller det andet problem.
                        </p>
                        </div>
                </div>
            </div>
        </body>
    </>   
    )
}