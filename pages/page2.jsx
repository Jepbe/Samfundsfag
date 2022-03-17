import Navbar from "/components/navabr";
import style from '/../styles/modules/page1.module.scss'
import Image from "next/image";


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
                        <Image
                            className={style.mainImage}
                            src="/assets/UCAV.jpeg"
                            alt="UACV"
                            width="100"
                            height="40%"
                        />    <br />
                       <label className={style.imgLabel}>Foto af Unmanned combat aerial vehicle</label>
                        <br />
                        <h3>Det danske forsvar har ikke sine egne militære droner</h3>
                        <p>Man har i forsvaret ikke valgt at få militære droner indu blandt andet fordi UAVer:</p>
                       
                            <li>&quot;kan endnu ikke erstatte bredt anvendelige bemandede systemer som fx jagerfly&quot;</li>
                            <li>&quot;har, i kraft af eksisterende regulering, begrænset anvendelse civilt luftrum&quot;</li>
                            <li>&quot;er sårbare i omstridt luftrum&quot;</li>
                            <li>&quot;er dyre og mandskabsintensive&quot;</li>
                            <li>&quot;er stadig mere upålidelige end bemandede platforme&quot;</li>

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