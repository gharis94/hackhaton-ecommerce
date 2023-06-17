import Banner from '@/components/Banner'
import HomeProductListComponent from '@/components/HomeProductListComponent'
import MainComponent from '@/components/MainComponent'
import {Toaster} from 'react-hot-toast'

export default function Home() {
  return (
    <main className="flex gap-4 max-w-[1250px] mb-4 mx-auto px-10 flex-col">      
      <Banner/>      
      <MainComponent/>
      <HomeProductListComponent title='Best Seller'   type='bestSeller'/>
      <HomeProductListComponent title='Trending Products' type='trendingProducts' />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
    </main>
  )
}
