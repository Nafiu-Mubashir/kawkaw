import Events from '~/sections/home-section/events'
import HeroSection from '~/sections/home-section/hero'
import { Inter } from 'next/font/google'
import LatestNews from '~/sections/home-section/news'
import PopularCourses from '~/sections/home-section/popular-courses'
import RegisterNow from '~/sections/home-section/register'
import WhyChooseUs from '~/sections/home-section/why'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white'>
      <HeroSection />
      <PopularCourses />
      <RegisterNow />
      <WhyChooseUs />
      <Events />
      <LatestNews />
    </main>
  )
}
