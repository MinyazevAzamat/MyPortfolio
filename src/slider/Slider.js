import React, {useState} from "react";
import './slider.scss';
import Slide1 from '../components/Main';
import Slide2 from '../components-dark/Main-dark';
import vector1 from "../img/Vector 1.svg";
import vector2 from "../img/Vector 2.svg";
import vector3 from "../img/Vector 3.svg";

const img = [
    <Slide1 key={Slide1}/>,
    <Slide2 key={Slide2}/>
]

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextIndex = activeIndex ? activeIndex - 1 : img.length + 1

    function next_click () {
        if (activeIndex < img.length - 1)
        {
            setActiveIndex(activeIndex + 1)
        } else
        setActiveIndex(0)
    }

    function prev_click () {
        if (activeIndex > 0)
        {
            setActiveIndex(activeIndex - 1)
        } else
        setActiveIndex(img.length - 1)
    }

    return (
        <div className="slider">
            <div className="slider-img slider-img-prev" key={prevIndex}>
                {img[prevIndex]}
            </div>
            <div className="slider-img" key={activeIndex}>
                <button onClick={prev_click}>  
                    <img className="left1 left" src={vector1}/>
                    <img className="left2 left" src={vector2}/>
                    <img className="left3 left" src={vector3}/>
                </button>
                {img[activeIndex]}
                <button  onClick={next_click}>
                    <img className = "right1 right"src={vector1}/>
                    <img className="right2 right" src={vector2}/>
                    <img className="right3 right" src={vector3}/>
                </button>
            </div>
            <div className="slider-img slider-img-next" key={nextIndex}> 
                {img[nextIndex]}
            </div>
        </div>
    )
}

export default Slider;