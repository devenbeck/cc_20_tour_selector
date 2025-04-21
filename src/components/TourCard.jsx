import React from "react";

const TourCard = ({ id, name, info, image, price, onRemove }) => {
    return (
        <article className="tour-card">
            <img src={image} alt={name} />
            <div className="tour-info">
                <h3>{name}</h3>
                <p>{info}</p>
                <h4>${price}</h4>
                <button onClick={() => onRemove(id)}>Not Interested</button>
            </div>
        </article>
    );
};

export default TourCard;