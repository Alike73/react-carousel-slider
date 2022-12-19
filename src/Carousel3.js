import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel3() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/5565fb23.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/3d6e76cf.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/b21484bb.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/658598f2.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/1e9bf9a4.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/12000000/11260000/11252900/11252860/6462d537.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
            </Carousel>
        </div>
    );
}