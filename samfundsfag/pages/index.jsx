import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navabr'
import style from '../styles/modules/Home.module.scss'

export default function Home() {
  return (
    <div className={style.Hello}>
      <Navbar></Navbar>
      Hello World!
    </div>
  )
}
