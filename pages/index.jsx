import Navbar from './components/navabr';
import style from '../styles/modules/home.module.scss';

export default function Home() {
  
  return (
    <>
    <div className={style.Hello}>
    <Navbar />
      {/* Hello World! */}
      <div className={style.main}>
            <h1>Droner i krig</h1>
            <button>UAV</button>
            <button>UCAV</button>
        </div>
      <div className={style.videoContainer}>
        <video className={style.video} height="100%" width="100%" autoPlay muted loop> 
          <source src='/assets/NewArmaVideo.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
    </>
  )
}
