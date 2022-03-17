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
                        <h1>Er det i orden at bruge droner?</h1>
                    </div>
                        <div className={style.divForTextOnly}>
                        <p>
                            Dels kan det være i strid med den del af folkeretten, der afgør, om en stat overhovedet må bruge magt, hvis droner bruges til at angribe mål i et land, der ikke er med i krigen. Derudover er det kun lovligt at angribe militære mål, kombattanter eller civile, der tager direkte del i kamphandlingerne.
                        </p>
                        </div>
                </div>
            </div>
        </body>
    </>   
    )
}