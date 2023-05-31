
import MainCarousel from "./MainCarousel"
import ShoppingList from "./ShoppingList"
import Banner from "./Banner"
import Subscribe from "./Subscribe"
import Video from "./Video"
import ImageBanners from "./ImageBanners"



const Home = () => {
    return (
        <div>
            <MainCarousel />

            {/* THESE ARE IN MAIN CAROUSEL COMPONENT */}
            {/* <Banner />
                <ShoppingList /> */}
                
            <Subscribe />
            <ImageBanners />
            <Video />
        </div>
    )
}

export default Home
