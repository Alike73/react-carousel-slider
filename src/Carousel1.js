import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel1() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/e35c617c.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/ae3b3cfe.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/ea5572f3.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/2b6d2098.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/6e672afd.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/3000000/2700000/2696800/2696769/d6552909.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
            </Carousel>
        </div>
    );
}
export default Carousel1;