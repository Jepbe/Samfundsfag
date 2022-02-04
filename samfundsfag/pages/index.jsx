import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/modules/Home.module.scss'

export default function Home() {
  return (
    <div className={style.Hello}>
      Hello World!
    </div>
  )
}
