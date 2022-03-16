import Navbar from "./components/navabr";
import style from './../styles/modules/page1.module.scss'


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
                        <h1>Hvilke typer droner findes der?</h1>
                        <h4>I Danmark har vi ikke Unmanned combat aerial vehicle (UCAV)</h4>
                    </div>
                   <img src="http://localhost:3000/assets/UCAV.jpeg" alt="" /><br />
                       <label className={style.imgLabel}>Foto af Unmanned combat aerial vehicle</label>
                        <br />
                        <h3>Det danske forsvar har ikke sine egne militære droner</h3>
                        <p>Man har i forsvaret ikke valgt at få militære droner indu blandt andet fordi UAV'er:</p>
                       
                            <li>"kan endnu ikke erstatte bredt anvendelige bemandede systemer som fx jagerfly"</li>
                            <li>"har, i kraft af eksisterende regulering, begrænset anvendelse civilt luftrum"</li>
                            <li>"er sårbare i omstridt luftrum"</li>
                            <li>"er dyre og mandskabsintensive"</li>
                            <li>"er stadig mere upålidelige end bemandede platforme"</li>

                            <br />
                            <br />
                            <br />
                            <br />

                            <h3>Liste over nogle droner:</h3>
                            <p>MQ-9 Reaper</p>
                            <p>RQ-12 WASP</p>
                            <p>Stalker</p>
                            <p>RQ-4 Global Hawk</p>
                            <p>ZALA 421-08</p>
                            
                </div>
            </div>
        </body>
    </>   
    )
}