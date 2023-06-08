import Banner from '@/components/Banner'
import HomeProductListComponent from '@/components/HomeProductListComponent'
import MainComponent from '@/components/MainComponent'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex gap-4 max-w-[1250px] mb-4 mx-auto px-10 flex-col">      
      <Banner/>      
      <MainComponent/>
      <HomeProductListComponent title='Best Seller'/>
      <HomeProductListComponent title='Trending Products'/>
    </main>
  )
}
