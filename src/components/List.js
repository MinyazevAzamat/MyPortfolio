import React, {useState} from "react";
import arrow from "../img/arrow.svg";
import Drop from "./Drop";
import "../styles/list.scss"
import "../styles/main.scss"

const One = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="list">
                <div className="list_container">
                    <div className="list_content">
                        <div className="line"> </div>
                        <div className="list_text">
                            <span>Tomorrow Tasks</span>
                            <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="list-container">
                        <Drop/>
                    </div>
                )}
            </div>
        </div>
    )
}

const Two = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="list">
                <div className="list_container">
                    <div className="list_content">
                        <div className="line"> </div>
                        <div className="list_text">
                            <span>09/07  Tasks</span>
                            <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="list-container">
                        <Drop/>
                    </div>
                )}
            </div>
        </div>
    )
}

const Three = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="list">
                <div className="list_container">
                    <div className="list_content">
                        <div className="line"> </div>
                        <div className="list_text">
                            <span>10/07  Tasks</span>
                            <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="list-container">
                        <Drop/>
                    </div>
                )}
            </div>
        </div>
    )
}

const Four = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="list">
                <div className="list_container">
                    <div className="list_content">
                        <div className="line"> </div>
                        <div className="list_text">
                            <span>11/07  Tasks</span>
                            <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="list-container">
                        <Drop/>
                    </div>
                )}
            </div>
        </div>
    )
}

const Five = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="list">
                <div className="list_container">
                    <div className="list_content">
                        <div className="line"> </div>
                        <div className="list_text">
                            <span>12/07  Tasks</span>
                            <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>

                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="list-container">
                        <Drop/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default function App () {

    const [component, setComponent] = useState('one');
    return (
        <>
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
        </>
    )
}