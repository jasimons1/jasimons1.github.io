import React, {useState} from "react";
import leftChevron from "../images/leftChevron.png"
import rightChevron from "../images/rightChevron.png"

export default function ImageSlider(props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = props.images;

    function previousSlide() {
        setCurrentSlide(currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1);
    }

    function nextSlide() {
        setCurrentSlide(currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1);
    }

    return (
        <div className="slider">
            <div className="sliderContent">
                <img src={sliderImages[currentSlide].image} alt={sliderImages[currentSlide].caption}/>
            </div>
            <div className="sliderControls">
                <img src={leftChevron} alt="Previous" onClick={previousSlide}/>
                <img src={rightChevron} alt="Next" onClick={nextSlide}/>
            </div>
        </div>
    )
}