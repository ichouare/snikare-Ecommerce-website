import BodyProduct from '@/components/bodyProduct'
import Engagement from '@/components/Engagement'
import HeroHome from '@/components/HeroSection'
import Journal from '@/components/Journal'
import ParsleySeed from '@/components/ParsleySeedSection'
import Pub from '@/components/PubSection'
import PureRadiance from '@/components/PureRadiance'
import Model from '@/components/shared/model'
import User from '@/components/User'


const Home = () => {

    return (
        <section className='relative w-full h-auto overflow-hidden'>
            <Model />
            <HeroHome />
            <Pub />
            <ParsleySeed />
            <BodyProduct />
            <PureRadiance />
            <Engagement />
            <User />
            <Journal />
        </section>
    )
}

export default Home