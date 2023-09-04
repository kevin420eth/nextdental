import About from '@/components/Home/About/About'
import Appointment from '@/components/Home/Appointment/Appointment'
import Enviroment from '@/components/Home/Enviroment/Enviroment'
import Landing from '@/components/Home/Landing/Landing'
import Services from '@/components/Home/Services/Services'
import Team from '@/components/Home/Team/Team'
import ToTheTopButton from '@/components/ToTheTopButton/ToTheTopButton'

export const metadata = {
  title: '日日美學牙醫診所 - 首頁',
  description: '台中最優值的牙醫診所',
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
        <Team />
        <ToTheTopButton />
      </main>
    </div>
  )
}
