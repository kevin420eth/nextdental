import Image from 'next/image'
import styles from './page.module.css'
import About from '@/components/Home/About/About'
import Appointment from '@/components/Home/Appointment/Appointment'
import Enviroment from '@/components/Home/Enviroment/Enviroment'
import Landing from '@/components/Home/Landing/Landing'
import Services from '@/components/Home/Services/Services'

export default function Home() {
  return (
    <div>
      <main>
        <Landing />
        <About />
        <Appointment />
        <Services />
        <Enviroment />
      </main>
    </div>
  )
}
