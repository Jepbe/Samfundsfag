import Navbar from "/components/navabr";
import style from '/../styles/modules/page1.module.scss'
import Image from 'next/image';

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
                        <h1>Hvad bruger militæret droner til?</h1>
                    </div>
                        <div className={style.divForTextOnly}>
                        <p>
                        I dag er det helt almindeligt, at militærmagter bruger ikke-bevæbnede droner til overvågning. Siden 2007 har danske soldater for eksempel anvendt droner til overvågning i særligt Afghanistan. De har primært brugt Raven-droner fra den amerikanske foderproducent AeroVironment, men de senere år har Forsvaret også indkøbt droner fra den kinesiske producent DJI, hvilket har vakt kritik, som det fremgår af Berlingskes artikel ”Forsvaret køber stort ind af kinesiske droner – USA forbyder dem af sikkerhedshensyn” (se kilder). Overvågningsdronerne kan optage video, som de sender tilbage til basen. Dette kan både ske med almindeligt kamera og med infrarødt kamera, så soldaterne kan overvåge landjorden både om dagen og natten.
                        </p>
                        <br /><br /><br /><br /><br /><br />
                            <h3>Hvordan har mængden af &quot;Drone strikes&quot;  udviklet sig gennem tiden?</h3>
                            <Image
                                src="assets/Dronestatesti.png"
                                className={style.mainImage}
                                alt="Statestik"
                            />
                            <h4>Her ser du en statestik over mennesker dræbt i Pakistan i tidsperioden 2004 til 2013 af CIA.</h4>
                        </div>
                </div>
            </div>
        </body>
    </>   
    )
}