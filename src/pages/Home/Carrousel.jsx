import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './Carrousel.css';

const Carrousel = (props) => {
    const data = props.data;
    console.log(data);
    const slideRef = useRef(null);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const handleClickNext = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.appendChild(items[0]);
    };

    const handleClickPrev = () => {
        let items = slideRef.current.querySelectorAll('.item');
        slideRef.current.prepend(items[items.length - 1]);
    };

    return (
        <div className="containe">
            <div id="slide" ref={slideRef}>
                {data.map((store) => (
                    <div
                        key={store.id}
                        className="item"
                        style={{ backgroundImage: `url(${store.image})` }}
                    >
                        <div className="content">
                            <div className="name">{store.name}</div>
                            <div className="des">{store.description}</div>
                            <NavLink
                                className="btn btn-success"
                                to={`/tienda/${store._id}`}
                            >
                                Comprar
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button id="prev" onClick={handleClickPrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button id="next" onClick={handleClickNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};

export default Carrousel;
