import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel5() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/3cad7c77.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/1c970753.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/867ac178.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/2416f791.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/82c9471a.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1560000/1559100/1559047/380e7122.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
            </Carousel>
        </div>
    );
}