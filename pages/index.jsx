import Navbar from './components/navabr';
import style from '../styles/modules/Home.module.scss';

export default function Home() {
  
  return (
    <>
    <div className={style.Hello}>
    <Navbar />
  
      {/* Hello World! */}
      <div className={style.videoContainer}>
        <video className={style.video} height="100%" width="100%" autoPlay muted loop> 
          <source src='http://localhost:3000/assets/NewArmaVideo.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
    </>
  )
}
