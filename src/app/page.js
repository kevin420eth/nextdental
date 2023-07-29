import About from '@/components/Home/About/About'
import Appointment from '@/components/Home/Appointment/Appointment'
import Enviroment from '@/components/Home/Enviroment/Enviroment'
import Landing from '@/components/Home/Landing/Landing'
import Services from '@/components/Home/Services/Services'

export const metadata = {
  title: '澄臻美學牙醫診所 - 首頁',
  description: '台中市最優值得牙醫診所',
}

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