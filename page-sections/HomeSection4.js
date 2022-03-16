import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Tile from "../components/Tile";

const Homesection4 = () => {
    return ( 
        <div>
             <Carousel>
                <CarouselItem> <Tile image_link={"/BlueIcon.svg"} heading={"Liquidating Unmined Gold"} body={"Unmined gold has never been as valuable as it is right now"}/> </CarouselItem>
                <CarouselItem> Item 2</CarouselItem>
                <CarouselItem> Item 3</CarouselItem>
            </Carousel>
        </div>
    );
}
 
export default Homesection4;