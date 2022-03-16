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
                        <h1>Hvordan kæmper droner?</h1>
                    </div>
                        <div className={style.divForTextOnly}>
                        <p>
                        De fleste droner bruger bomber
                        </p>
                            <iframe 
                                src="https://www.youtube.com/watch?v=fWPkZPBQrrU" 
                                frameborder="0" allowfullscreen
                            ></iframe>
                        </div>
                </div>
            </div>
        </body>
    </>   
    )
}