import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carousel2() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/77157ea2.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/36637fb0.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/72807c63.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/6ed9f109.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/f1aad7e9.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
                <div>
                    <img src="https://images.trvl-media.com/lodging/2000000/1410000/1402200/1402122/f27841d0.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt='resort' width="720px" />
                </div>
            </Carousel>
        </div>
    );
}