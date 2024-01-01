import Events from '~/sections/events'
import HeroSection from '~/sections/hero'
import { Inter } from 'next/font/google'
import PopularCourses from '~/sections/popular-courses'
import RegisterNow from '~/sections/register'
import WhyChooseUs from '~/sections/why'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
     <HeroSection />
     <PopularCourses />
      <RegisterNow />
      <WhyChooseUs />
      <Events />
    </main>
  )
}
