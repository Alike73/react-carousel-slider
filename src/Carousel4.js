import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel4() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/aa1d1d94.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/5d9f7e33.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/ec130368.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/1c6f0ee9.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/23f8ba9b.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/4000000/3700000/3690700/3690681/2688cc99.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
            </Carousel>
        </div>
    );
}